
import React, { useState } from 'react';
const Home = (props) => {
    // for uppercase
    const uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    // for lowercase
    const lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    // for cleartext
    const cleartext = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    // for copy text
    const copytext = () => {
        navigator.clipboard.writeText(text);
    }
    // for extra space
    const extraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    return (
        <>
            <h1 align="center">TEXT FORM</h1>
            <div className="container" >
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-4 my-2" onClick={uppercase}>Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-4 my-2" onClick={lowercase}>Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-4 my-2" onClick={cleartext}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-4 my-2" onClick={copytext}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-text-black-50 border-1px mx-4 my-2" onClick={extraspace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3 ">
                <h2>Counter And Reader</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}

export default Home;