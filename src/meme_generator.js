import React from "react"
import ReactDOM from "react-dom"
import MemeBase from './meme_base'
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom'

const Meme = () =>{
    return <HashRouter>
    <>
      <Switch>
        <Route path="/" component={MemeBase} />
      </Switch>
    </>
  </HashRouter>
}

ReactDOM.render(<Meme/>, document.getElementById("app"))
