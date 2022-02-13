import React from 'react'
import MainTitle from '../Components/MainTitle'
import PortContainer from '../Components/portfolio/PortContainer'
import { motion } from 'framer-motion'
import { PortfolioContext } from '../Context/portfolioContext'

function Portfolio(props) {
  const { loading, portfolio } = React.useContext(PortfolioContext)

  return (
    <div className='container'>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: '-100vh' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='fade-out-effect'
      ></motion.div>
      <div className='page-container'>
        <MainTitle backTitle='WORKS' first='MY' second='PORTFOLIO' />
        <PortContainer portfolio={portfolio} loading={loading} />
      </div>
    </div>
  )
}

export default Portfolio
