import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode has been enabled", "success");
      document.title = "Text Utility - Dark Mode";
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
      document.title = "Text Utility - Light Mode";
    }
  };
  return (
    <div className="App">
      <Router>
      <Navbar title="Text-Utility" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      {/* <Textform
        showalert={showalert}
        mode={mode}
        hello="Please Enter Your Text To Uppercase"
      /> */}
      {/* <About /> */}




      {/* Routers Starts Here  */}
   
        <Routes>
          <Route exact
            path="/"
            element={
              <Textform
                showalert={showalert}
                mode={mode}
                hello="Please Enter Your Text To Uppercase"
              />
            }
          />

          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
      {/* Routers Ends Here */}
    </div>
  );
}

export default App;
