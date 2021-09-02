import React from 'react'
import { useHistory, useParams } from 'react-router'
import Slider from 'react-slick'
import backward from '../Assests/Graphics/Backward.svg'
import { ProjectContext } from '../Context/projectContext'

function Projects() {
  const { loading, project } = React.useContext(ProjectContext)
  const { id } = useParams()
  const history = useHistory()
  const projectData = project.find((item) => item.id === parseInt(id))

  const settings = {
    className: 'largecarsel',
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 800,
    cssEase: 'linear',
    fade: false,
  }
  if (loading) {
    return <h1>loading...</h1>
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
            <img src={backward} alt='' />
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
