import React, {useState} from "react";

export default function Textform(props){

    const handleUpClick = (()=>{
        // console.log("Uppercase was clickled " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert(" Converted to uppercase...", "Success");
    })

    const handleDownClick = (()=>{
        // console.log("Uppercase was clickled " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" Converted to Lower Case...", "Success");
    })

    const handleCleareText = (()=>{
        // console.log("Uppercase was clickled " + text);
        let newtext = " ";
        setText(newtext);
        props.showAlert(" Text was cleared....", "Success");
    })

    const handleonChange = ((event)=>{
        // console.log("On change");
        setText(event.target.value);
    })
    
    const [text , setText]=useState("Enter text here...");
    return(
        <>
        <div className="container my-3" style={{Color:props.mode==='dark' ? 'white':'black'}}>
            <h1 style={{color:props.mode==='dark' ? 'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark' ? 'gray':'white', Color:props.mode==='dark' ? 'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn-primary mx-1 my-1" onClick={handleCleareText}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words & Character {text.length}.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Time required to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to above box to preview"}</p>
        </div>
        </>

    )
}
