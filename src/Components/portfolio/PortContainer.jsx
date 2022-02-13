import React from 'react'
import SinglePort from './SinglePort'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import { motion } from 'framer-motion'

function PortContainer({ portfolio, loading }) {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'port-item-container', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    easing: 'ease-out-cubic', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })
  if (loading) {
    return (
      <div className='port-item-container'>
        <div className='single-item-container-image animated-background'></div>
        <div className='single-item-container-image animated-background'></div>
        <div className='single-item-container-image animated-background'></div>
      </div>
    )
  } else {
    {
      if (portfolio.meta.pagination.pageCount === 0) {
        return (
          <motion.div
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='port-item-container'
          >
            <div className='single-item-container-image animated-background'></div>
            <div className='single-item-container-image animated-background'></div>
            <div className='single-item-container-image animated-background'></div>
          </motion.div>
        )
      } else {
        return (
          <motion.div
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='port-item-container'
          >
            {portfolio.data.map((items) => {
              const { attributes } = items
              return (
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='bottom-bottom'
                >
                  <Link to={`${items.id}`} key={items.id}>
                    <SinglePort attributes={attributes} />
                  </Link>
                </div>
              )
            })}
          </motion.div>
        )
      }
    }
  }
}

export default PortContainer
