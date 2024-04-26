import Header from '../components/Header';
import TrainMenu from '../components/TrainMenu';


function TrainingPage() {
    const trainingMenu = { autocheck: false };
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
        <TrainMenu {...trainingMenu} />
    </div>
  );
}

export default TrainingPage;