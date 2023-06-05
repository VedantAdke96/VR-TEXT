import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About"
import Dark from './night-mode.png'
import Light from './light-mode.png'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#454545'
      setBtnText('Enable Light Mode')
      showAlert('Dark mode has been enabled', 'success')
    } else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setBtnText('Enable Dark Mode')
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="VR TEXT" mode={mode} toggleMode={toggleMode} btnText={btnText} darkModeImg={Dark} lightModeImg={Light}/>
      <Alert alertText={alert}/>
      <div className="container my-4">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}></Route> */}
          {/* <Route exact path="/" element={}> */}
          <TextForm heading="Enter the text to analyze." mode={mode} showAlert={showAlert}/>
        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
