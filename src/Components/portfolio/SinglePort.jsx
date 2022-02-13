import React from 'react'

function SinglePort({ attributes }) {
  const { mainTitle, Image } = attributes
  return (
    <div className='single-item-container'>
      {Image.data ? (
        <img
          className='single-item-container-image'
          src={Image.data.attributes.url}
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
