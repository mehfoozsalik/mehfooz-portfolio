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
        <p className='aboutDetail'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu
          eget leo rhoncus dapibus. Nulla bibendum suscipit tellus egestas
          dapibus. Vivamus elementum erat sed risus tempor ultrices. Phasellus
          quis accumsan nisi, scelerisque elementum quam. Quisque vel arcu a
          ligula faucibus viverra eu ac ex. Vestibulum nisl nunc, molestie eget
          feugiat in, aliquam vel orci. Vivamus cursus eleifend suscipit. Sed
          quis eros ac arcu ultrices facilisis ultrices id diam. Nunc sed
          tincidunt velit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. In eu arcu eget leo rhoncus dapibus. Nulla bibendum suscipit
          tellus egestas dapibus. Vivamus elementum erat sed risus tempor
          ultrices. Phasellus quis accumsan nisi, scelerisque elementum quam.
          Quisque vel arcu a ligula faucibus viverra eu ac ex. Vestibulum nisl
          nunc, molestie eget feugiat in, aliquam vel orci. Vivamus cursus
          eleifend suscipit. Sed quis eros ac arcu ultrices facilisis ultrices
          id diam. Nunc sed tincidunt velit.
        </p>
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
