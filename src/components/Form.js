import React, { useState } from 'react'

export default function Form(props) {
  const handleUpClick = () =>{
     let newText =text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () =>{
     let newText =text.toLowerCase();
    setText(newText)
  }
  const handleClrText = () =>{
     let newText =''
    setText(newText)
  }

  const HandleChange= (event) =>
  {
    // console.log("handle changedd")
    setText(event.target.value)

  }

  const[text,setText] = useState('Enter Text Here');
  return (
    <>
    <div >
      <h2>{props.heading}</h2>
      <div >
        <textarea className="form-control" value={text}  onChange={HandleChange} id="mybox" rows="5"></textarea>
      </div> 
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleClrText}>Clear Text</button>

</div>
<div>
  <h2>YOur Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>Average human time to read = {0.08 * text.split(" ").length} </p>
</div>
</>

  )
}
