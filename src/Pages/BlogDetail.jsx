import React from 'react'
import MainTitle from '../Components/MainTitle'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { BlogContext } from '../Context/blogContext'
import Loading from '../Components/Loading'

function BlogDetail(props) {
  const { loading, blog } = React.useContext(BlogContext)
  const { id } = useParams()
  let uniqueID = parseInt(id)
  let navigate = useNavigate()
  if (loading) {
    return <Loading />
  } else {
    const singleBlog = blog.data.find((item) => {
      return item.id === uniqueID
    })
    if (!singleBlog) {
      return <MainTitle backTitle='SORRY' first='NO BLOG HERE' />
    } else {
      const prevBlog = blog.data.find((item) => {
        return item.id === uniqueID - 1
      })
      const nextBlog = blog.data.find((item) => {
        return item.id === uniqueID + 1
      })
      const { attributes } = singleBlog
      const { mainTitle, mainLinkTitle, mainLink, image, multiLinks } =
        attributes
      return (
        <div className='singlePageContainer'>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: '-100vh' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='fade-out-effect'
          ></motion.div>
          <div className='page-container'>
            <MainTitle backTitle='MYBLOG' first={mainTitle} />
            <div className='singlepage-header'>
              <svg
                onClick={() => {
                  navigate(-1)
                }}
                width='56'
                height='46'
                viewBox='0 0 40 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM2 13.5H38V10.5H2V13.5Z'
                  fill='#FAFAFA'
                />
              </svg>
              <a href={mainLink}>{mainLinkTitle}</a>
            </div>
            {image.data && <img src={image.data.attributes.url} alt='' />}
          </div>
          <div className='single-page-footer'>
            <div>
              {prevBlog ? (
                <div>
                  <h5
                    onClick={() => {
                      navigate(`/blogs/${prevBlog.id}`)
                    }}
                  >
                    PREVIOUS WORK
                  </h5>
                  <h6>{prevBlog.attributes.mainTitle}</h6>
                </div>
              ) : (
                ' '
              )}
            </div>
            <div>
              {nextBlog ? (
                <div>
                  <h5
                    onClick={() => {
                      navigate(`/blogs/${nextBlog.id}`)
                    }}
                  >
                    NEXT WORK
                  </h5>
                  <h6>{nextBlog.attributes.mainTitle}</h6>
                </div>
              ) : (
                ' '
              )}
            </div>
            <div>
              {multiLinks.map((items) => {
                const { id, link, linkTitle } = items
                return (
                  <a key={id} href={link}>
                    {linkTitle}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default BlogDetail
