import React from 'react'
import CertificateCarosel from '../Components/CertificateCarosel'
import pdf from '../Assests/Certificates/Resume.pdf'
import AboutDescription from '../Components/aboutDescription'

function Aboutme(props) {
  const [show, setShow] = React.useState(false)
  function clickHandler() {
    setShow(!show)
  }
  return (
    <>
      <div className={`${show ? 'show' : 'hide'}`}>
        <CertificateCarosel setShow={clickHandler} />
      </div>
      <div className='aboutme'>
        <h1>About Me</h1>
        <div className='aboutPara'>
          <AboutDescription />
        </div>
        <h3 onClick={clickHandler}>view my certificates</h3>

        <div className='siteLink'>
          <a href='https://splashstore-profile.netlify.app/' target='_blank'>
            <h3>SpashStore</h3>
          </a>
          <a href='https://artpartfolio.com/' target='_blank'>
            <h3>ArtPartfolio</h3>
          </a>
        </div>
        <a className='cv' href={pdf} download>
          Download CV
        </a>
      </div>
    </>
  )
}

export default Aboutme
