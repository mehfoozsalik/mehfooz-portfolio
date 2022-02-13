import React from 'react'

function SingleBlog({ heading, blogImage }) {
  return (
    <div className='single-item-container-blog'>
      <img
        className='single-item-container-blog-image'
        src={blogImage}
        alt=''
      />
      <div className='underline-div'></div>
      <div className='blog-title-div'>
        <h6>{heading}</h6>
      </div>
    </div>
  )
}

export default SingleBlog
