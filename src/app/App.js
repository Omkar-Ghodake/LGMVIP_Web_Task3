import Home from '../components/Home';
import StudentDataState from '../context/studentData/StudentDataState';
import './App.css';

function App() {
  return (
    <>
      <StudentDataState>
        <Home />
      </StudentDataState>
    </>
  );
}

export default App;
