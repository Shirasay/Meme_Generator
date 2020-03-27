import React from "react";
import { useState } from 'react';

const SubPosition=({meme_text})=>{
  const[position_x, setPosition_x] = useState(0)
  const[position_y, setPosition_y] = useState(0)

  const style={
    position: "absolute",
    width: "80%",
    textAlign: "center",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "15px 0",
    padding: "0 5px",
    color: "white",
    letterSpacing: "1px",
    textShadow:
      `2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      0 2px 0 #000,
      2px 0 0 #000,
      0 -2px 0 #000,
      -2px 0 0 #000,
      2px 2px 5px #000`,
    top: `${position_x}px`,
    left: `${position_y}px`,
  };

  return (<>
      <input type="number" onChange={e =>setPosition_x(e.target.value)} value={position_x}></input>
      <input type="number" onChange={e =>setPosition_y(e.target.value)} value={position_y}></input>
      <h2 className='top' style={style}>{meme_text}</h2>
  </>);
};

const Meme_Create =({selected_meme, onClick})=>{
    const[inputs, setInputs] = useState([null]);
    const[counter, setCounter] = useState(2);
    const[meme_text, setMeme_text] = useState('')
    
    const addInput=(e)=>{
        e.preventDefault()
        setInputs(prevState=>[...prevState, `Text area ${counter}`]);
        setCounter(prevState=>prevState+1);
      };
      
    return (<>
        <button onClick={()=>window.location.reload(false)}>Return</button>
        <div style={{position: 'relative'}}>
        <a key={selected_meme.id} data-tag={selected_meme.name}>
        <img className="selected_meme" src={selected_meme.url} alt={selected_meme.name} onClick={onClick}
         style={{position: 'relative'}}></img>
        <SubPosition meme_text={meme_text}/>
         </a>
        </div>
        <div>
        <button onClick={addInput}>Text area</button><br/>
          {inputs.map((el,i)  => <><input key={i} onChange={e =>setMeme_text(e.target.value)} value={meme_text}
           type="text" placeholder={el}/><br/></>)}
          <input type='submit' value='Generate'/>
        </div>
    </>);
};

export default Meme_Create;