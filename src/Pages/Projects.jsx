import React from 'react'
import { useHistory, useParams } from 'react-router'
import Slider from 'react-slick'

import { ProjectContext } from '../Context/projectContext'
import Loading from './Loading'
import SampleNextArrow from '../Components/SampleNextArrow'
import SamplePrevArrow from '../Components/SamplePrevArrow'
import CrossBtn from '../Components/CrossBtn'

function Projects({ exactdata }) {
  const { loading, project } = React.useContext(ProjectContext)
  const { id } = useParams()
  const history = useHistory()
  console.log(exactdata)
  const projectData = exactdata.find((item) => item.id === parseInt(id))

  const settings = {
    className: 'largecarsel',
    infinite: true,
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    speed: 800,
    cssEase: 'linear',
    fade: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          infinite: true,
        },
      },
    ],
  }
  if (loading) {
    return <Loading />
  } else {
    const {
      ProjectTitle,
      ProjectTitleImage,
      CaroselImages,
      SectionADescription,
    } = projectData
    return (
      <div className='singleProject'>
        <div className='backbtn'>
          <button className='btn' onClick={history.goBack}>
            <CrossBtn />
          </button>
        </div>
        <img src={ProjectTitleImage.url} alt='' className='mainImage' />
        <h1>{ProjectTitle}</h1>
        <p>{SectionADescription}</p>
        <div className='Slider'>
          <Slider {...settings}>
            {CaroselImages.map((arr) => {
              return (
                <div className='silkSlider'>
                  <img
                    src={arr.url}
                    alt={arr.alternativeText}
                    className='multiImages'
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}

export default Projects
