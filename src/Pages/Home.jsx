import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioImage from '../Assests/Graphics/POrtFolioMainImage.png'
import ai from '../Assests/Icons/Ai.svg'
import css from '../Assests/Icons/css.svg'
import fig from '../Assests/Icons/Figma.svg'
import html from '../Assests/Icons/html.svg'
import js from '../Assests/Icons/js.svg'
import ps from '../Assests/Icons/ps.svg'
import react from '../Assests/Icons/React.svg'
import xd from '../Assests/Icons/xd.svg'
import AboutDescription from '../Components/aboutDescription'

function Home(props) {
  return (
    <div className='homepage'>
      <div className='typography'>
        <h3>Software Engineer</h3>
        <h4>
          <span>Ui Ux</span>
          <span>Designer</span>
          <span>Developer</span>
        </h4>
        <h1 className='mainheading'>Mehfooz Salik</h1>
        <div className='aboutmeHomePara'>
          <AboutDescription />
        </div>
      </div>
      <div className='mainBGImage'>
        <Link to='/aboutme'>
          <img src={PortfolioImage} alt='main Image' />
        </Link>
      </div>

      <div className='skillsSet'>
        <h2 className='skills'>Skills</h2>

        <div className='icons'>
          <img src={ai} alt='skils set icons' />
          <img src={css} alt='skils set icons' />
          <img src={html} alt='skils set icons' />
          <img src={js} alt='skils set icons' />
          <img src={react} alt='skils set icons' />
          <img src={fig} alt='skils set icons' />
          <img src={ps} alt='skils set icons' />
          <img src={xd} alt='skils set icons' />
        </div>
      </div>
    </div>
  )
}

export default Home
