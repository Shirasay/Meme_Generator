import React from "react"
import { useState } from 'react'
import domtoimage from 'dom-to-image-more'

const Text_Display=({meme_text, position_x, position_y})=>{
  
  const style={
    position: "absolute",
    width: "100%",
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
  }

  return <h1 style={style}>{meme_text}</h1>
}

const Meme_Create =({selected_meme, onClick})=>{
  const[meme_text, setMeme_text] = useState([])
  const[inputs, setInputs] = useState([])
  const[counter, setCounter] = useState(2)
  const[position_x, setPosition_x] = useState([0])
  const[position_y, setPosition_y] = useState([140])


  const addInput=(e)=>{
      e.preventDefault()
      setInputs(prevState=>[...prevState, `Text area ${counter}`])
      setCounter(prevState=>prevState+1)
    }

    const handlesetMeme_text=(value, i)=>{
      const newMemeText = [...meme_text]
      newMemeText[i]=value
      setMeme_text(newMemeText)
    }

    const handlePositionX=(value_x, i)=>{
      const newMemePositionX = [...position_x]
      newMemePositionX[i]=value_x
      setPosition_x(newMemePositionX)
    }

    const handlePositionY=(value_y, i)=>{
      const newMemePositionY = [...position_y]
      newMemePositionY[i]=value_y
      setPosition_y(newMemePositionY)
    }

    const editedMeme=()=>{
      const generateMeme = document.getElementById('selected_meme')

      domtoimage.toPng(generateMeme)
          .then(function (dataUrl) {
              const img = new Image()
              img.src = dataUrl
              document.body.appendChild(img)
          })
          .catch(function (error) {
              console.error('oops, something went wrong!', error)
          })
      }
      
  return (<>
      <button onClick={()=>window.location.reload(true)}>Return</button>
      
      <div id='selected_meme'  style={{position: 'relative', maxWidth: '200px'}}>
      <a key={selected_meme.id} data-tag={selected_meme.name}>
      <img  className="selected_meme" src={selected_meme.url} alt={selected_meme.name} onClick={onClick}
        style={{position: 'relative'}}/>
          {inputs.map((el, i)=> <>
            <Text_Display meme_text={meme_text[i]} position_x={position_x[i]} position_y={position_y[i]}/>
          </>)}
        </a>
      </div>
      <div>
      <button onClick={addInput}>Text area</button><br/>
        {inputs.map((el,i)=> <>
          <input key={i} onChange={e =>handlesetMeme_text(e.target.value,i)} value={meme_text[i]}
          type="text" /><br/>
          <input type="number" step='20' onChange={e =>handlePositionX(e.target.value,i)} placeholder={el}/>
          <input type="number" step='20' onChange={e =>handlePositionY(e.target.value,i)} placeholder={el}/><br/> 
          </>)}
        <button onClick={editedMeme}>Generate</button>
      </div>
  </>)
}

export default Meme_Create