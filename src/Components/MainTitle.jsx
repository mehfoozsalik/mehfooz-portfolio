import React from 'react'
import { motion } from 'framer-motion'

function MainTitle({ backTitle, first, second }) {
  return (
    <div className='maintitle-container'>
      <div className='sub-maintitle-container'>
        <motion.h1
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          className='mainTitle'
        >
          {backTitle}
        </motion.h1>
        <motion.span
          initial={{ y: 1000 }}
          animate={{ y: -30 }}
          className='spanInSide'
        >
          <h3 className='mainTitle-head'>{first} </h3>
          <h3 className='mainTitle-head blur-color'> {second}</h3>
        </motion.span>
      </div>
    </div>
  )
}

export default MainTitle
