import logo from './logo.svg';
import './App.css';
import Accordion from './LiftingState/exam';
import SyncedInputs from './LiftingState/Synced_inputs';
import FilterableList from './LiftingState/challang2/exam2';

function App() {
  return (
    <div className="App">
      <div>
        <hr></hr>
        <FilterableList/>
      </div>
    </div>
  );
}

export default App;
