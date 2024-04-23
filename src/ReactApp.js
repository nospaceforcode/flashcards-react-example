import React, { useState, useEffect } from 'react';
import './App.css';
import flashcards from './flashcards';
import AddCardTemplate from './templates/AddCardTemplate';
import AnswerTemplate from './templates/AnswerTemplate';
import EditCardTemplate from './templates/EditCardTemplate';
import HeaderTemplate from './templates/HeaderTemplate';
import ModalTemplate from './templates/ModalTemplate';
import ProgressTemplate from './templates/ProgressTemplate';
import QuestionTemplate from './templates/QuestionTemplate';
import ScoreTemplate from './templates/ScoreTemplate';
import SelectTemplate from './templates/SelectTemplate';
import TrainTemplate from './templates/TrainTemplate';

function App() {
  const [cardsToRetry] = useState([]);
  const [numToRetry] = useState(0);
  const [defaultSettings] = useState({ qSide: 'side1', autocheck: true, firstanswer: true });
//   const [headerTemplate, setHeaderTemplate] = useState('');
//   const [trainTemplate, setTrainTemplate] = useState('');
//   const [selectTemplate, setSelectTemplate] = useState('');
//   const [questionTemplate, setQuestionTemplate] = useState('');
//   const [answerTemplate, setAnswerTemplate] = useState('');
//   const [progressTemplate, setProgressTemplate] = useState('');
//   const [scoreTemplate, setScoreTemplate] = useState('');
//   const [editCardTemplate, setEditCardTemplate] = useState('');
//   const [addCardTemplate, setAddCardTemplate] = useState('');
//   const [modalTemplate, setModalTemplate] = useState('');

  useEffect(() => {
    // Set up event listeners
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    document.querySelector('.header').addEventListener('change', handleHeaderChange);
    document.querySelector('.header').addEventListener('keydown', handleHeaderKeyDown);
    document.querySelector('.header').addEventListener('click', handleHeaderClick);
    document.querySelector('.main').addEventListener('click', handleMainClick);
    document.querySelector('.main').addEventListener('change', handleMainChange);
    document.querySelector('.main').addEventListener('keydown', handleMainKeyDown);
    document.querySelector('.modal').addEventListener('click', handleModalClick);
    document.querySelector('.modal').addEventListener('change', handleModalChange);

    return () => {
      // Clean up event listeners
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      document.querySelector('.header').removeEventListener('change', handleHeaderChange);
      document.querySelector('.header').removeEventListener('keydown', handleHeaderKeyDown);
      document.querySelector('.header').removeEventListener('click', handleHeaderClick);
      document.querySelector('.main').removeEventListener('click', handleMainClick);
      document.querySelector('.main').removeEventListener('change', handleMainChange);
      document.querySelector('.main').removeEventListener('keydown', handleMainKeyDown);
      document.querySelector('.modal').removeEventListener('click', handleModalClick);
      document.querySelector('.modal').removeEventListener('change', handleModalChange);
    };
  }, []);

  const handleDOMContentLoaded = () => {
    const decks = flashcards.listDecks();
    let i = 0;
    let usersettings = JSON.parse(localStorage.getItem('usersettings')) || {};
    for (i; i < decks.length; i++) {
      if (!usersettings[decks[i].name]) {
        usersettings[decks[i].name] = defaultSettings;
      }
    }
    localStorage.setItem('usersettings', JSON.stringify(usersettings));
  };

  const handleHeaderChange = (e) => {
    flashcards.setDisplayName(e.target.value);
    e.stopPropagation();
  };

const handleHeaderKeyDown = (e) => {
    if (e.keyCode === 13) {
        e.target.blur();
    }
};

  const handleHeaderClick = (e) => {
    const el = e.target;
    if (el.id === 'flip') {
      flashcards.flipDeck();
      let name = flashcards.exposeDeck().name;
      let s = getUserSettings(name);
      s.qSide = flashcards.settings.questionSide;
      updateUserSettings(name, s);
      let currentIndex = flashcards.getSessionInfo().currentIndex;
      let card = flashcards.draw(currentIndex);
      Render.question(card.question[0], card.difficulty, true);
    }
    if (el.id === 'deckSettings') {
      Render.modal();
    }
    e.stopPropagation();
  };

  const handleMainClick = (e) => {
    const el = e.target;
    if (el.id === 'addCard' || el.parentNode.id === 'addCard') {
      makeNewCard();
    }
    else if (el.classList.contains('deleteCard')) {
      let cardToDelete = el.parentNode.parentNode;
      let indexToDelete = cardToDelete.dataset.index;
      flashcards.deleteCard(indexToDelete);
      Render.deleteCard(cardToDelete);
      let cards = document.querySelectorAll('.cardline');
      [].forEach.call(cards, c => {
        if (c.dataset.index > indexToDelete) {
          c.dataset.index -= 1;
        }
      });
    }
  };

  const handleMainChange = (e) => {
    const el = e.target;
    const parent = el.parentNode;
    if (el.classList.contains('side1') || el.classList.contains('side2')) {
      let side = el.classList.contains('side1') ? 'side1' : 'side2';
      let val = el.value.split('/').map(x => x.trim());
      flashcards.editCard(parent.dataset.index, side, val);
    }
    else if (el.classList.contains('diff')) {
      flashcards.editCard(parent.dataset.index, 'difficulty', parseInt(el.value));
    }
  };

  const handleMainKeyDown = (e) => {
    const el = e.target;
    if (e.keyCode === 13 && (el.classList.contains('side1') || el.classList.contains('side2'))) {
      e.preventDefault();
      makeNewCard();
    }
  };

  const handleModalClick = (e) => {
    const el = e.target;
    const deck = document.querySelector('.modal__content').dataset.name;
    if (el.classList.contains('modal') || el.classList.contains('modal__close')) {
      Render.modal();
    }
    if (el.id === 'deleteDeck' || el.parentNode.id === 'deleteDeck') {
      flashcards.deleteDeck(deck);
      Render.modal();
      window.location.href = '#';
    }
  };

  const handleModalChange = (e) => {
    const el = e.target;
    const deck = document.querySelector('.modal__content').dataset.name;
    const s = getUserSettings(deck);
    if (el.id === 'firstanswer') {
      s.firstanswer = el.checked;
      updateUserSettings(deck, s);
    }
    if (el.id === 'autocheck') {
      s.autocheck = el.checked;
      updateUserSettings(deck, s);
    }
    if (el.id === 'sideselect') {
      s.qSide = el.value;
      updateUserSettings(deck, s);
    }
  };

  const drawNextCard = () => {
    recordProgress();
    let card = numToRetry ? flashcards.draw(cardsToRetry.splice(0, 1)[0]) : flashcards.drawNext();
    if (!card) {
      Render.score(flashcards.getSessionInfo());
    } else {
      Render.question(card.question[0], card.difficulty);
      document.querySelector('.answer__input').addEventListener('keydown', enterAnswer);
      document.querySelector('#card').removeEventListener('click', drawNextCard);
      document.querySelector('#card').addEventListener('click', submitAnswer);
    }
  };

  const recordProgress = () => {
    const si = flashcards.getSessionInfo();
    const name = flashcards.exposeDeck().name;
    let usersettings = getUserSettings(name);
    usersettings.state = si;
    updateUserSettings(name, usersettings);
    Render.progress(si, flashcards.deckLength());
  };

  const submitAnswer = () => {
    const name = flashcards.exposeDeck().name;
    const usersettings = getUserSettings(name);
    const userAnswer = document.querySelector('.answer__input');
    if (usersettings.autocheck) {
      const result = flashcards.checkAnswer(userAnswer.value.trim());
      const answers = usersettings.firstanswer ? [result.answers[0]] : result.answers;
      Render.answer(answers, result.newDifficulty, result.outcome);
      document.querySelector('#card').addEventListener('click', drawNextCard);
      recordProgress();
    } else {
      const a = flashcards.revealAnswer();
      const answers = usersettings.firstanswer ? a.answers.slice(0, 1) : a.answers;
      const difficulty = a.difficulty;
      Render.answer(answers, difficulty);
    }
    userAnswer.removeEventListener('keydown', enterAnswer);
    document.querySelector('#card').removeEventListener('click', submitAnswer);
  };

  const enterAnswer = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitAnswer();
    }
  };

  const makeNewCard = () => {
    flashcards.addCard('', '', 5);
    let newIndex = flashcards.deckLength() - 1;
    Render.newCard('', '', 5, newIndex);
    document.getElementById(`card-${newIndex}`).children[0].focus();
  };

  const updateUserSettings = (name, deckSettings) => {
    let usersettings = JSON.parse(localStorage.getItem('usersettings'));
    usersettings[name] = deckSettings;
    localStorage.setItem('usersettings', JSON.stringify(usersettings));
  };

  const getUserSettings = (name) => {
    return JSON.parse(localStorage.getItem('usersettings'))[name];
  };

  const truncate = (title) => {
    let mobilemax = 15;
    let allmax = 45;
    let mobilewordmax = 11;
    let allwordmax = 17;
    let len = title.length;
    let max = window.innerWidth > 350 ? allmax : mobilemax;

    if (len > max) {
      let rgx = new RegExp(`.{${len - max}}$`);
      title = title.replace(rgx, '...');
    }

    return title;
  };

  const Render = {
    header: function (backlink, title, editing, name) {
      let shorttitle = backlink ? truncate(title) : title;
      let context = {
        backlink: backlink,
        title: title,
        shorttitle: shorttitle,
        editing: editing || false,
        name: name || false
      };
      return <div className="header" dangerouslySetInnerHTML={{ __html: headerTemplate(context) }}></div>;
    },
    question: function (qText, diff, isFlipped) {
      let context = {
        question: qText,
        difficulty: diff
      };
      document.querySelector('.card__side--question').innerHTML = questionTemplate(context);
      document.querySelector('#maincard').classList.remove('card--flip');
      if (!isFlipped) {
        document.querySelector('.answer__input').value = '';
        document.querySelector('.answer__input').readOnly = false;
        document.querySelector('.answer__input').focus();
        document.getElementById('checkAnswer').classList.remove('js-hidden');
        document.getElementById('nextButtons').classList.add('js-hidden');
      }
    },
    answer: function (answers, diff, outcome) {
      outcome = outcome ? 'correct' : 'incorrect';
      const autocheck = arguments.length > 2;
      let context = {
        answers: answers,
        difficulty: diff,
        outcome: outcome,
        autocheck: autocheck
      };
      document.querySelector('.card__side--answer').innerHTML = answerTemplate(context);
      document.querySelector('#maincard').classList.add('card--flip');
      document.getElementById('checkAnswer').classList.add('js-hidden');
      document.getElementById('nextButtons').classList.remove('js-hidden');
      document.querySelector('.answer__input').readOnly = true;
      if (autocheck) {
        document.getElementById('nextCard').focus();
      } else {
        document.getElementById('correctAnswer').focus();
      }
    },
    progress: function (sessionInfo, totalCards) {
      let bars = [];
      let cardsAnswered = sessionInfo.correct + sessionInfo.incorrect;
      let cardsRemaining = numToRetry ? numToRetry - cardsAnswered : totalCards - cardsAnswered;
      let i;
      for (i = 0; i < totalCards; i++) {
        if (sessionInfo.correctCards.includes(i)) {
          bars.push('correct');
        } else if (sessionInfo.incorrectCards.includes(i)) {
          bars.push('incorrect');
        }
      }
      for (i = 0; i < cardsRemaining; i++) {
        bars.push('incomplete');
      }
      document.querySelector('.progress').innerHTML = progressTemplate({ bars: bars });
    },
    score: function (sessionInfo) {
      let context = {
        correct: sessionInfo.correct,
        total: sessionInfo.incorrect + sessionInfo.correct
      };
      let retryButton = document.getElementById('retry');
      let scoreIndicator = document.querySelector('.score');
      scoreIndicator.innerHTML = scoreTemplate(context);
      scoreIndicator.classList.remove('js-hidden');
      document.querySelector('.card').classList.add('js-hidden');
      document.querySelector('.answer__input').classList.add('js-hidden');
      document.getElementById('nextButtons').classList.add('js-hidden');
      if (sessionInfo.incorrect) {
        retryButton.classList.remove('js-hidden');
        retryButton.focus();
      } else {
        document.getElementById('shuffle').focus();
      }
    },
    reset: function () {
      document.querySelector('.card').classList.remove('js-hidden');
      document.querySelector('.answer__input').classList.remove('js-hidden');
      document.getElementById('retry').classList.add('js-hidden');
      document.querySelector('.score').classList.add('js-hidden');
    },
    editing: function (cards, decklength, deckname, usersettings) {
      let mContext = {
        name: deckname,
        isSide2: usersettings.qSide === 'side2',
        firstanswer: usersettings.firstanswer,
        autocheck: usersettings.autocheck
      };
      document.querySelector(".main").innerHTML = addCardTemplate();
      for (let i = 0; i < decklength; i++) {
        let side1 = cards[i].side1.join(' / ');
        let side2 = cards[i].side2.join(' / ');
        let difficulty = cards[i].difficulty;
        let index = i;
        Render.newCard(side1, side2, difficulty, index);
      }
      document.querySelector(".modal").innerHTML = modalTemplate(mContext);
    },
    newCard: function (side1, side2, difficulty, index) {
      let context = {
        index: index,
        side1: side1,
        side2: side2,
        difficulty: difficulty
      };
      document.querySelector("#addCard").insertAdjacentHTML('afterend', editCardTemplate(context));
    },
    deleteCard: function (cardToDelete) {
      document.querySelector('.main').removeChild(cardToDelete);
    },
    modal: function () {
      document.querySelector(".modal").classList.toggle("modal--show");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {Render.header(false, "Flashcards Demo")}
      </header>
      <main className="main"></main>
      <div className="modal"></div>
    </div>
  );
}

export default App;
