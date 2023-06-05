import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text transformed to uppercase", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text transformed to lowercase", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const replaceText = () => {
    const textareaText = document.getElementById('myBox').value
    let oldText = prompt("Enter the text you want to replace:");
    let newText = prompt("Enter new text:");
    if(textareaText.includes(oldText)  === true){
      setText(text.replace(oldText, newText));
      props.showAlert(`Replaced ${oldText} by ${newText}`, "success")
    } else{
      props.showAlert("No such text found", "warning")
    }
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success")
  };
  const handleTiClick = () => {
    let newText = text
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text transformed to titlecase", "success")
  };
  const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied text to clipboard", "success")
  }
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#454545" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleTiClick}>
            Convert To Titlecase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={copyText}>
            Copy Text
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container" style={{
        color:props.mode==='dark'?'white':'black'
      }}>
        <div className="input-group mb-3">
          <button
            className="btn btn-info"
            type="button"
            id="button-addon2"
            onClick={replaceText}
          >
            Replace Text
          </button>
        </div>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((x) => x !== "").length} <b>Words</b> &{" "}
          {text.length} <b>Characters</b>
        </p>
        <p>{0.008 * text.trim(" ").length} Minutes read</p>
        <h2>Preview Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

TextForm.deafaultProps = {
  heading: "Set an heading",
};
