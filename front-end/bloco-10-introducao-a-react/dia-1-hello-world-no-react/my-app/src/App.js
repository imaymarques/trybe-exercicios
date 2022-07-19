// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <div className="App">
      <ul>{ tasks.map((el) => Task(el)) }</ul>
    </div>
  );
}

export default App;
