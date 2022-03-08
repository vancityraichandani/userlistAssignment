import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import Navbar from './Components/Navbar';
import {useState} from 'react'
function App() {
  
  let [mode, setMode] = useState('light');
  let toggleMode = () => {
    if (mode === 'light') {
      console.log('dark set');
      setMode('dark');
    } else {
      console.log('light set');
      setMode('light');
    }
  }
  return (
    <>
      <Navbar mode={mode} />
      <List mode={mode} />
    </>
  );
}

export default App;
