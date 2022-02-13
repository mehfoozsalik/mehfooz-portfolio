import React from 'react'
import { motion } from 'framer-motion'
import url from '../Utilities/URL'
import SmallLoading from './SmallLoading'

function PersonalInfo({ perosnalInfo, resume, smallloading, experience }) {
  return (
    <div className='personal-info-container'>
      <div>
        <motion.h4
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, y: -10 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
        >
          Personal Infos
        </motion.h4>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className='information-container'
        >
          {perosnalInfo &&
            perosnalInfo.map((i) => {
              return (
                <h6 key={i.id}>
                  {i.headingLabel}:{' '}
                  <span className='bold'>{i.headingAnswer}</span>
                </h6>
              )
            })}
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className='personalInfo-button'
        >
          <button className='personalInfo-button-fancy'>
            <a href={resume} download>
              {smallloading ? (
                <SmallLoading />
              ) : (
                <svg
                  width='19'
                  height='13'
                  viewBox='0 0 19 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.96 5.64687C16.0817 5.33638 16.15 4.99687 16.15 4.64286C16.15 3.10491 14.8734 1.85714 13.3 1.85714C12.7152 1.85714 12.1689 2.03125 11.7177 2.32723C10.8953 0.934375 9.36047 0 7.6 0C4.97563 0 2.85 2.07768 2.85 4.64286C2.85 4.72121 2.85297 4.79955 2.85594 4.8779C1.19344 5.44955 0 6.99911 0 8.82143C0 11.1283 1.91484 13 4.275 13H15.2C17.2989 13 19 11.3373 19 9.28571C19 7.48951 17.6937 5.98929 15.96 5.64687ZM12.0145 8.22076L8.88547 11.2792C8.70141 11.4592 8.39859 11.4592 8.21453 11.2792L5.08547 8.22076C4.78562 7.92768 4.99938 7.42857 5.42094 7.42857H7.3625V4.17857C7.3625 3.92321 7.57625 3.71429 7.8375 3.71429H9.2625C9.52375 3.71429 9.7375 3.92321 9.7375 4.17857V7.42857H11.6791C12.1006 7.42857 12.3144 7.92768 12.0145 8.22076Z'
                    fill='#FAFAFA'
                  />
                </svg>
              )}
              <span>Download CV</span>
            </a>
          </button>
        </motion.div>
      </div>
      <div className='information-container'>
        {experience &&
          experience.map((i) => {
            return (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: `${i.delay}`,
                  ease: 'easeIn',
                }}
                className='info-box'
                key={i.id}
              >
                <h2>{i.number}+</h2>
                <h6>
                  <div className='dashh'></div>
                  {i.RelatedNumber}
                </h6>
              </motion.div>
            )
          })}
      </div>
    </div>
  )
}

export default PersonalInfo
