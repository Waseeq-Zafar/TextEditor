import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Conversion to uppercase successful", "success");
  };
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Conversion to lowercase successful", "success");
  };
  
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removal sucessful", "success");
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard!");
      },
      () => {
        alert("Failed to copy");
      }
      );
    };
    
    const handleClearClick = () => {
      setText("");
      props.showAlert("Clear content sucessful", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{
        color: props.mode==='dark' ? '#ffffff':'black',
      }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode==='dark'?'#31373d':'#ffffff',
              color: props.mode ==='dark'?'#ffffff': 'black',
              cursor: "pointer"
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn btn-primary" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>
              Convert to LowerCase
            </button>
            <button className="btn btn-primary ml-3" onClick={handleExtraSpaces}>
              Remove Extra Spaces
            </button>
          </div>
          <div>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>
              Copy
            </button>
            <button className="btn btn-primary" onClick={handleClearClick}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3" style={{
        color: props.mode==='dark' ? '#ffffff':'black',
      }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} char
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview it here"}</p>
      </div>
    </>
  );
}
