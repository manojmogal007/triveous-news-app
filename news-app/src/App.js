import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Allroutes from './components/Allroutes';

function App() {
  return (
    <div className="App">
      {/* <Signup/>
      <Login/> */}
      <Allroutes/>
    </div>
  );
}

export default App;
