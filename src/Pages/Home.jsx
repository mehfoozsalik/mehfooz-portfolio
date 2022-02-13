import React from 'react'
import Typical from 'react-typical'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HomeContext } from '../Context/homeContext'
import Loading from '../Components/Loading'

function Home() {
  const { loading, home } = React.useContext(HomeContext)
  const { mainImage } = home
  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: '-100vh' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='fade-out-effect'
        ></motion.div>
        <svg
          className='bgcontainer'
          width='50%'
          height='100%'
          viewBox='0 0 498 100%'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 0H150L498 828H0V0Z' fill='#df5d3a' />
        </svg>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className='Home-container'
        >
          <div className='image-section'>
            {loading ? (
              <div className='image-section-main-imag animated-background'></div>
            ) : (
              <img
                className='image-section-main-imag'
                src={mainImage.data.attributes.url}
              />
            )}
          </div>
          <div className='detail-section'>
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeIn' }}
                className='head-primary'
              >
                {home.Name}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeIn' }}
                className='subtitle-secondary'
              >
                <h6 className='head-secondary'>{home.personel}</h6>
                <Typical
                  steps={home.typoAnimeArray.map((i) => i)}
                  loop={Infinity}
                  wrapper='h6'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeIn' }}
                className='flexdiv'
              >
                <div className='smalLine'></div>
                <h3>{home.firstTitle}</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeIn' }}
                className='flexdiv'
              >
                <div className='smalLine'></div>
                <h3>{home.secondTitle}</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: 'backIn' }}
                className='main-title-heading'
              >
                <p>{home.homeDescription}</p>
              </motion.div>
            </div>
            <div className='home-link'>
              <NavLink to='about' className='home-link-pro'>
                ABOUT ME
                <svg
                  width='3.4rem'
                  height='1.3rem'
                  viewBox='0 0 40 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM2 13.5H38V10.5H2V13.5Z'
                    fill='#f0f0f0'
                  />
                </svg>
              </NavLink>
              <NavLink to='portfolio' className='home-link-pro'>
                portfolio
                <svg
                  width='3.4rem'
                  height='1.3rem'
                  viewBox='0 0 40 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM2 13.5H38V10.5H2V13.5Z'
                    fill='#f0f0f0'
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }
}

export default Home
