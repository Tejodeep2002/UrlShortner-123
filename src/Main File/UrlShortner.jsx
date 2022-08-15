import React, { useState } from "react";
import './UrlShortner.css';


const Textarea=({setInputValue})=> {
  const [value,setValue] = useState("");

  const handleSubmit=()=>{
    setInputValue(value);
    setValue("");
  }

  const handleOnChange=(event)=>{
    setValue(event.target.value);
  }
    return (
      <div>
        <span className='headding'>UrlShortner 123</span>
        <form className="form">
            <input type='text' className='textlink' value={value} id='textlink' onChange={handleOnChange} placeholder="Enter Your Link"></input>
            <button type="button" className="submit" onClick={handleSubmit} id='sumbit'>Submit</button>
        </form>
        
      </div>
    );

}

export default Textarea;
