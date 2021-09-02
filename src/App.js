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

function App() {
  return (
    <Router>
      <SlideBar />
      <Header />
      <Switch>
        <Route exact={true} path='/'>
          <Home />
        </Route>
        <Route exact={true} path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact={true} path='/portfolio/:id'>
          <Projects />
        </Route>
        <Route exact={true} path='/aboutme'>
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
