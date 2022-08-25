import React, { useState } from "react";
import PropTypes from "prop-types";

const Textform=(props)=> {
  const [text, setText] = useState("");
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert("Text Converted to Uppercase" ,"success")
  };
  const handleonchange = (event) => {
    setText(event.target.value)
    };
  const wordcount =() =>{
    let words = document.getElementById("exampleFormControlTextarea1").value;
    let count = 0;
    let split = words.split(' ');
    for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
          count += 1;
      }
  }
    document.getElementById("show").innerHTML = count;
  }
  const handlelower = () => {
    let hello = text.toLowerCase();
    setText(hello)
    props.showalert("Converted to Lowercase" ,"success")
  }
  const handleclear = () => {
    let hello = '';
    setText(hello)
    props.showalert("Text Cleared" ,"success")
  }
  const copy = () => {
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.select();
    document.execCommand("copy");
    props.showalert("Text Copied" ,"success")
  }
  return (
    <div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#000'}}>
        <h1>{props.hello}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleonchange}
            onInput={wordcount}
            style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#000'}}
            placeholder='Enter Your Text Here'
          ></textarea>
        </div>
        <button onClick={handleupclick} className="btn btn-primary">
          Convert to Uppercase
        </button>
        <button onClick={handlelower} className="btn btn-primary mx-2">
          Convert to Lowercase
        </button>
        <button onClick={copy} className="btn btn-primary mx-2">
          Copy Text
        </button>
        <button onClick={handleclear} className="btn btn-primary mx-2">
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#000'}}>
        <h1>Your Text Summary</h1>
        <p>Your Text Includes <span id="show">0</span>  Words and {text.length} Characters</p>
        <h2>
          Preview
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

Textform.propTypes = {
  hello: PropTypes.string,
  text: PropTypes.string,
};

export default Textform;
