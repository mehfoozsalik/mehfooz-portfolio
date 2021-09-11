import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//Importing pages
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Projects from './Pages/Projects'
import Error from './Pages/Error'
import Aboutme from './Pages/Aboutme'
///importing components
import Header from './Components/Header'
import SlideBar from './Components/SlideBar'
import ProjectItems from './Components/ProjectItems'

function App() {
  return (
    <Router>
      <SlideBar />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/aboutme'>
          <Aboutme />
        </Route>
        <Route path='/*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
