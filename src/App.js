import './App.css';
import Header from './components/Header';
import DeckMenu from './components/DeckMenu';
import TrainPage from './components/TrainPage';

function App() {
  const deckMenu = { deck:[
    { name: 'Deck 1', shortname: 'D1', averageDifficulty: 3, cardLength: 20 },
    { name: 'Deck 2', shortname: 'D2', averageDifficulty: 2, cardLength: 15 },
  ]};
  let context = {
      backlink: true,
      editing: false,
      title: 'Simple Title',
      name: 'st',
      shorttitle: 'Simple title',
     };
  
  return (
    <div className="App">
      <Header {...context}/>
      <DeckMenu {...deckMenu} />
      <TrainPage autocheck={true}/>
    </div>
  );
}

export default App;
