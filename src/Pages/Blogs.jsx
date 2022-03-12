import React from 'react'
import SingleBlog from '../Components/blog/SingleBlog'
import MainTitle from '../Components/MainTitle'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import { motion } from 'framer-motion'
import { BlogContext } from '../Context/blogContext'
import Loading from '../Components/Loading'

function Blogs(props) {
  const { loading, blog } = React.useContext(BlogContext)
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
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-out-cubic', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })
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
        <div className='page-container'>
          <MainTitle backTitle='RESEARCH' first='MY ' second='BLOGS' />
          {blog.meta.pagination.pageCount === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: '100vh' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='port-item-container'
            >
              <div className='single-item-container-blog-image animated-background'></div>
              <div className='single-item-container-blog-image animated-background'></div>
              <div className='single-item-container-blog-image animated-background'></div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: '100vh' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='port-item-container'
            >
              {blog.data.map((items) => {
                const { attributes } = items
                const { url } = attributes.mainImage.data.attributes
                return (
                  <div data-aos='fade-up'>
                    <Link to={`${items.id}`} key={items.id}>
                      <SingleBlog
                        heading={attributes.mainTitle}
                        blogImage={url}
                      />
                    </Link>
                  </div>
                )
              })}
            </motion.div>
          )}
        </div>
      </div>
    )
  }
}

export default Blogs
