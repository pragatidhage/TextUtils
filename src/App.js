import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";






function App() {
  const [mode , setMode ] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode"
      setInterval(() => {
        document.title="TextUtils is Amazing"
      }, 2000);
      setInterval(() => {
        document.title="Install TextUtils Now"
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils-Light Mode";
    }
  }

  

  return (
 <>
 <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <Routes>
    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
    <Route exact path='/about' element={<About mode={mode}/>} />
 </Routes>
 </Router>
 </>
  );
}

export default App;
