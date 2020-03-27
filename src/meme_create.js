import React from "react";
import { useState } from 'react';
import domtoimage from 'dom-to-image-more';

const Meme_Create =({selected_meme, onClick})=>{
    const[inputs, setInputs] = useState([]);
    const[counter, setCounter] = useState(2);
    const[meme_text, setMeme_text] = useState([])
    const[position_x, setPosition_x] = useState(0)
    const[position_y, setPosition_y] = useState(0)
    
    const style={
      position: "absolute",
      width: "80%",
      textAlign: "center",
      margin: "0",
      padding: "0",
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

    const addInput=(e)=>{
        e.preventDefault()
        setInputs(prevState=>[...prevState, `Text area ${counter}`]);
        setCounter(prevState=>prevState+1);
      };

      const handlesetMeme_text=(value, i)=>{
        const newMemeText = [...meme_text]
        newMemeText[i]=value
        setMeme_text(newMemeText)
      }
      const editedMeme=()=>{
        const generateMeme = document.getElementById('selected_meme');
 
        domtoimage.toPng(generateMeme)
            .then(function (dataUrl) {
                const img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        }

    return (<>
        <button onClick={()=>window.location.reload(false)}>Return</button>
        <div id='selected_meme'  style={{position: 'relative', maxWidth: '200px'}}>
        <a key={selected_meme.id} data-tag={selected_meme.name}>
        <img  className="selected_meme" src={selected_meme.url} alt={selected_meme.name} onClick={onClick}
         style={{position: 'relative'}}/>
         <h2 className='top' style={style}>{meme_text}</h2>
         </a>
        </div>
        <input type="number" step='20' onChange={e =>setPosition_x(e.target.value)} value={position_x}/>
        <input type="number" step='20' onChange={e =>setPosition_y(e.target.value)} value={position_y}/>
      
        <div>
        <button onClick={addInput}>Text area</button><br/>
          {inputs.map((el,i)  => <><input key={i} onChange={e =>handlesetMeme_text(e.target.value,i)} value={meme_text[i]}
           type="text" placeholder={el}/><br/></>)}
          <button onClick={editedMeme}>Generate</button>
        </div>
    </>);
};

export default Meme_Create;