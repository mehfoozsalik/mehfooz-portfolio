import React from 'react'
import MainTitle from '../Components/MainTitle'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PortfolioContext } from '../Context/portfolioContext'
import Loading from '../Components/Loading'

function PortfolioDetail() {
  const { loading, portfolio } = React.useContext(PortfolioContext)
  const { id } = useParams()
  let navigate = useNavigate()
  if (loading) {
    return <Loading />
  } else {
    const singleProfile = portfolio.data.find((item) => {
      return item.id === parseInt(id)
    })
    if (!singleProfile) {
      return <MainTitle backTitle='SORRY' first='NO PORTFOLIO HERE' />
    } else {
      let prevProfile
      let nextProfile
      if (portfolio.data.length > 1) {
        prevProfile = portfolio.data.find((item) => {
          return item.id === parseInt(id) - 1
        })
        nextProfile = portfolio.data.find((item) => {
          return item.id === parseInt(id) + 1
        })
      }
      const { attributes } = singleProfile
      const { Image, mainTitle, MultipleLinks, aLinkTitle, AdditionalLink } =
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
            <MainTitle backTitle='MYWORK' first={mainTitle} />
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
              <a href={AdditionalLink} target='_blank'>
                {aLinkTitle}
              </a>
            </div>
            {Image.data && <img src={Image.data.attributes.url} alt='' />}
          </div>
          <div className='single-page-footer'>
            <div>
              {prevProfile ? (
                <div>
                  <h5
                    onClick={() => {
                      navigate(`/portfolio/${prevProfile.id}`)
                    }}
                  >
                    PREVIOUS WORK
                  </h5>
                  <h6>{prevProfile.attributes.mainTitle}</h6>
                </div>
              ) : (
                ' '
              )}
            </div>
            <div>
              {nextProfile ? (
                <div>
                  <h5
                    onClick={() => {
                      navigate(`/portfolio/${nextProfile.id}`)
                    }}
                  >
                    NEXT WORK
                  </h5>
                  <h6>{nextProfile.attributes.mainTitle}</h6>
                </div>
              ) : (
                ' '
              )}
            </div>
            <div>
              {MultipleLinks &&
                MultipleLinks.map((items) => {
                  const { id, Links, linkTitle } = items
                  return (
                    <a key={id} href={Links}>
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

export default PortfolioDetail
