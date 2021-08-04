import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

function App() {
  
  return (
    
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
      </Switch>
      <About />
    </BrowserRouter>
    
  )
  
  
}

export default App
