import React from 'react'
import Slider from 'react-slick'
import one from '../Assests/Certificates/certOne.jpg'
import two from '../Assests/Certificates/certTwo.jpg'
import three from '../Assests/Certificates/certThree.png'
import backward from '../Assests/Graphics/Backward.svg'
import CrossBtn from './CrossBtn'

function certificateCarosel({ setShow }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className='backbtn'>
        <button className='btn' onClick={setShow}>
          <CrossBtn />
        </button>
      </div>
      <div className='aboutCertificates'>
        <h1>Certificates</h1>
        <Slider {...settings}>
          <img src={one} alt='certificates' />
          <img src={two} alt='certificates' />
          <img src={three} alt='certificates' />
        </Slider>
      </div>
      <div className='bg'></div>
    </>
  )
}

export default certificateCarosel
