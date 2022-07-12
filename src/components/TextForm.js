import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UPPER CASE" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleDownClick = () => {
    let newtext =text.toLowerCase();
    setText(newtext);
  }
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
 }
 const handleCopy = () => {
  var text = document.getElementById("mybox");
  text.select()
  navigator.clipboard.writeText(text.value);
 }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} style ={{backgroundColor : props.mode === 'dark'?'Grey': 'white', color:props.mode=== 'dark'?'white': '#042743'}}id="mybox" rows={9}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  );
}
