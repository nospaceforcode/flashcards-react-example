import './App.css';
import HeaderTemplate from './templates/HeaderTemplate';
import SelectTemplate from './templates/SelectTemplate';
import TrainTemplate from './templates/TrainTemplate';
import ProgressTemplate from './templates/ProgressTemplate';

function App() {
  const deck = [
    { name: 'Deck 1', shortname: 'D1', averageDifficulty: 3, cardLength: 20 },
    { name: 'Deck 2', shortname: 'D2', averageDifficulty: 2, cardLength: 15 },
  ],
     bars = ['correct', 'incomplete', 'incorrect', 'incomplete', 'correct', 'incorrect'];
  
  return (
    <div className="App">
      <HeaderTemplate
        backlink={false}
        editing={false}
        title="New Deck"
        name="new deck"
        shorttitle="new-deck"
      />
      <SelectTemplate deck={deck} />
      <TrainTemplate autocheck={false} />
      <h1>Progress Template Example</h1>
      <ProgressTemplate bars={bars} />
    </div>

  );
}

export default App;
