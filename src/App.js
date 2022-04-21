import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';
    // import {
   // BrowserRouter as Router,
  //  Switch,
 // Route,
// Link,
//} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState('null');

  const showAlert =(message,type)=> {
    setAlert ({
      msg: message,
      type: type
    })

setTimeout (()=> {
    setAlert(null);
 },3000);
}

  const toggleMode =()=> {
    if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled", "success");
    document.title="TextUtils - Dark Mode";
  }
  else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
    document.title="TextUtils - Light Mode";
     }
}
  return (
  <>
{/*<Navbar title ="TextUtils" aboutText="About TextUtils"/> */} 
{/*<Navbar/>*/}
{/*<Router>*/}
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
{/*<Switch>*/}
  {/*/users -->components-1
    /users/home --> -->components-2 */}
         {/* <Route exact path="/about">
            <About />
         </Route>*/}
         {/* <Route exact path="/">*/}
          <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/*<About/>*/}
        {/*</Route> */}
        {/*</Switch>*/}
</div>
{/*</Router>*/}
</>
  );
}

export default App;
