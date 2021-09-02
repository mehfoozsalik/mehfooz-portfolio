import React from 'react'
import CertificateCarosel from '../Components/CertificateCarosel'

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu
          eget leo rhoncus dapibus. Nulla bibendum suscipit tellus egestas
          dapibus. Vivamus elementum erat sed risus tempor ultrices. Phasellus
          quis accumsan nisi, scelerisque elementum quam. Quisque vel arcu a
          ligula faucibus viverra eu ac ex. Vestibulum nisl nunc, molestie eget
          feugiat in, aliquam vel orci. Vivamus cursus eleifend suscipit. Sed
          quis eros ac arcu ultrices facilisis ultrices id diam. Nunc sed
          tincidunt velit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. In eu arcu eget leo rhoncus dapibus. Nulla bibendum suscipit
          tellus egestas dapibus. Vivamus elementum erat sed risus tempor
          ultrices. Phasellus quis accumsan nisi, scelerisque elementum quam.
          Quisque vel arcu a ligula faucibus viverra eu ac ex. Vestibulum nisl
          nunc, molestie eget feugiat in, aliquam vel orci. Vivamus cursus
          eleifend suscipit. Sed quis eros ac arcu ultrices facilisis ultrices
          id diam. Nunc sed tincidunt velit.
        </p>
        <h3 onClick={clickHandler}>view my certificates</h3>

        <div className='siteLink'>
          <a href='https://splashstore-profile.netlify.app/' target='_blank'>
            <h3>SpashStore</h3>
          </a>
          <a href='https://artpartfolio.com/' target='_blank'>
            <h3>ArtPartfolio</h3>
          </a>
        </div>
      </div>
    </>
  )
}

export default Aboutme
