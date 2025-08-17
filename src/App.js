import logo from './logo.svg';
import './App.css';
import Accordion from './LiftingState/exam';
import SyncedInputs from './LiftingState/Synced_inputs';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <hr></hr>
      <h1>Challenge 1 of 2: Synced inputs</h1>
    </div>
  );
}

export default App;
