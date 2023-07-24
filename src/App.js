import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const toggleMode = ()=>{
    if(mode==='light')  {
      setMode ('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert(' Dark Mode has enabled', 'success');

    //   setInterval(() => {
    //     document.title = "Text Home Dark"
    //   }, 1000);

    //   setInterval(() => {
    //     document.title = "Text Home"
    //   }, 1500);
    }
    else{
       setMode ('light');
       document.body.style.backgroundColor = 'white';
       showAlert(' Light Mode has enabled', 'success');
    }
  }
  
  return (
    <>
    <Router>
     <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert = {alert}/>
     <div className='container my-3'>

     <Routes>
          <Route path="/about" element = {<About />}/>
          <Route path="/" element = {<Textform showAlert={showAlert} heading = " Hey Rushikesh !...  Enter the text to analyze below"  mode={mode}/>} />
      </Routes>    

     </div>
     </Router>
   </>
  );
}

export default App;
