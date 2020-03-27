import React from "react";

const Meme =({selected_meme, onClick})=>{
    return (
    <a id='mainPage' key={selected_meme.id} data-tag={selected_meme.name}>
        <img src={selected_meme.url} style={{width: '300px'}} alt={selected_meme.name} onClick={onClick}/>
    </a>
    )
};

export default Meme