import React from "react";

const Meme =({selected_meme, onClick})=>{
    return (
    <a href='#' key={selected_meme.id} data-tag={selected_meme.name} style={{position:"relative",overflow: 'hidden'}}>
        <img src={selected_meme.url} style={{width: '300px', }} alt={selected_meme.name} onClick={onClick}/>
    </a>
    )
};

export default Meme