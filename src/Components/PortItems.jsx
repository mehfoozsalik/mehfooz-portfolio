import React from 'react'
import { Link } from 'react-router-dom'
function PortItems({ id, ProjectTitle, ProjectTitleImage }) {
  const url = ProjectTitleImage.url
  return (
    <Link to={`/portfolio/${id}`}>
      <div className='projectImage'>
        <img src={url} alt='testing' />
        <div className='titleOverlay'>
          <h3>{ProjectTitle}</h3>
        </div>
      </div>
    </Link>
  )
}

export default PortItems
