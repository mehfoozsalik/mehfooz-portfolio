import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import App from './App'
import { ProjectProvider } from './Context/projectContext'

ReactDOM.render(
  <ProjectProvider>
    <App />
  </ProjectProvider>,

  document.getElementById('root')
)
