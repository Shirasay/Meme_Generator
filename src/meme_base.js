import React,{useState,useEffect} from 'react';
import Meme from './meme_select';
import Meme_Create from './meme_create';
import './style/meme_base.scss';
import styled from 'styled-components'

const MemeBase=()=>{
    const[main_meme, setMain_meme] = useState(['']);
    const[selected_meme, setSelected_meme] = useState('')
    const[search, setSearch] = useState('')
    
    const sortMeme=(data)=>{
      data.sort(function (a, b) {
        return a.height - b.height;
      });
      setMain_meme(data)
    }

    const Grid = styled.section`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      row-gap: 1rem;
      column-gap: 1rem;
      padding: 1rem;
      justify-items: center;
      line-height: 50px;
      overflow: hidden;
    `;
   
    const images = document.getElementsByTagName('a')
    const searchMeme=(value)=>{
      setSearch(value)
      
      for(const el of images){
        if(el.dataset.tag.toLowerCase().indexOf(search.toLowerCase()) === -1){
          el.classList.add("invisible");
        }else{
          el.classList.remove("invisible"); 
        }
        console.log(el);
      }
    }
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
          .then(response => response.json())
          .then(data => {
            sortMeme(data.data.memes);
          })
      }, []);
      
      return <> 
        <input onChange={e => searchMeme(e.target.value)} type='text' value={search}/><br/>
        {selected_meme && <Meme_Create selected_meme={selected_meme}/>}
        
        <Grid>
        {!selected_meme && main_meme.map(selected_meme=>{ 
          return <Meme selected_meme={selected_meme} onClick={()=>{setSelected_meme(selected_meme)}}/>}
        )}
        </Grid>
         </>
      
}
export default MemeBase;
