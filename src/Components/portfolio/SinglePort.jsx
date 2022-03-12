import React from 'react'

function SinglePort({ attributes }) {
  const { mainTitle, OuterImage } = attributes

  return (
    <div className='single-item-container'>
      {OuterImage.data ? (
        <img
          className='single-item-container-image'
          src={OuterImage.data.attributes.url}
          alt=''
        />
      ) : (
        <div className='single-item-container-image animated-background'></div>
      )}
      <h5>{mainTitle}</h5>
    </div>
  )
}

export default SinglePort
