import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }  
        
    const handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase","success")
    }

    const handleClearClick = () =>{
        setText("");
        props.showAlert("Screen is clear","success")
    }

    const handleReverseClick = () =>{
        
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text is Reversed","success")
    }
    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success")
    }

    const [text,setText] = useState("")
  return (
    <>
    <div className="container" style={{color : props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className=" container mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',color : props.mode ==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color : props.mode ==='dark'?'white':'black'}} id="myBox" rows="8">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters and {text.match(/\d/g)?.length || 0} digits</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the above textbox to preview!"}</p>
    </div>
    </>
    
  )
}
