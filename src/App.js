// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'

function App() {
  const[mode, setMode] = useState('light') //it will tell wheater dar mode or not
  const[alert,setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has Been Enabled", "success")
    }
    
  }
  return (
    <>
    <Navbar title = "Text-Utils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm heading = "ENTER YOUR TEXT TO ANALYZE" mode={mode}/>
    {/* <Alert/> */}
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
