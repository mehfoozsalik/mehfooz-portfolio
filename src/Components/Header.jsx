import React from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import logo from '../Assests/Graphics/M_S.svg'
import Drib from '../Assests/SocialIcons/Dribbble.svg'
import Inst from '../Assests/SocialIcons/Instagram.svg'
import Twit from '../Assests/SocialIcons/Twitter.svg'

function Header(props) {
  const history = useHistory()
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='ms logo' />
        </Link>
      </div>
      <div className='headerNav'>
        <div className='navHeaderItems'>
          <ul className='unorderNavlist'>
            <li>
              <NavLink
                exact
                to='/'
                className='navItems'
                activeClassName='activeNavItems'
              >
                HOME
              </NavLink>
            </li>
            <li
              onClick={() => {
                history.push(`/portfolio/Ui%20Ux`)
              }}
            >
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
        <div className='socialHeaderLinks'>
          <a href='https://www.instagram.com/mehfooz.salik' target='_blank'>
            <img src={Inst} alt='Instagram' />
          </a>
          <a href='https://dribbble.com/mehfoozsalik' target='_blank'>
            <img src={Drib} alt='Dribbles' />
          </a>
          <a href='https://twitter.com/MehfoozSalik' target='_blank'>
            <img src={Twit} alt='Twitter' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
