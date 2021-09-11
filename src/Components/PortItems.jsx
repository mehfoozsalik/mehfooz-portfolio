import React from 'react'

function PortItems({ ProjectTitle, ProjectTitleImage }) {
  const urlImage = ProjectTitleImage.url
  return (
    <div className='projectImage'>
      <img src={urlImage} alt='testing' />
      <div className='titleOverlay'>
        <h3>{ProjectTitle}</h3>
      </div>
    </div>
  )
}

export default PortItems
