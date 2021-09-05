import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../Assests/Graphics/M_S.svg'
import Drib from '../Assests/SocialIcons/Dribbble.svg'
import Inst from '../Assests/SocialIcons/Instagram.svg'
import Twit from '../Assests/SocialIcons/Twitter.svg'

function SlideBar(props) {
  const [toggle, setToggle] = React.useState(false)
  function clickHandler() {
    setToggle(!toggle)
  }
  return (
    <>
      <div className='hamBurgerIcon'>
        <button className='toggleBtnC' onClick={clickHandler}>
          <div className={`${toggle ? 'HamDiv HamOne' : 'HamDiv'}`} />
          <div className={`${toggle ? 'HamDiv HamTwo' : 'HamDiv'}`} />
          <div className={`${toggle ? 'HamDiv HamThree' : 'HamDiv'}`} />
        </button>
      </div>
      <div
        className={`${toggle ? 'slideContainer' : 'slideContainer slideOff'}`}
      >
        <div className='slideBar'>
          <div className='logoBig'>
            <Link exact to='/'>
              <img src={logo} alt='ms logo' />
            </Link>
          </div>
          <div className='navLinks'>
            <ul className='unorderlist'>
              <li onClick={clickHandler}>
                <NavLink
                  exact
                  to='/'
                  className='navItems'
                  activeClassName='activeNavItems'
                >
                  HOME
                </NavLink>
              </li>
              <li onClick={clickHandler}>
                <NavLink
                  to='/portfolio'
                  className='navItems'
                  activeClassName='activeNavItems'
                >
                  PORTFOLIO
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='socialLinks'>
            <a href='https://dribbble.com/mehfoozsalik' target='_blank'>
              <img src={Inst} alt='Instagram' />
            </a>
            <a href='https://www.instagram.com/mehfooz.salik' target='_blank'>
              <img src={Drib} alt='Dribbles' />
            </a>
            <a href='https://twitter.com/MehfoozSalik' target='_blank'>
              <img src={Twit} alt='Twitter' />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${toggle ? 'backdrop' : 'backdrop backdropOff'}`}
        onClick={clickHandler}
      ></div>
    </>
  )
}

export default SlideBar
