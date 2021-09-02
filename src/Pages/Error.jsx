import React from 'react'
import { Link } from 'react-router-dom'

function Error(props) {
  return (
    <div className='center'>
      <h1>This is an Error Page</h1>
      <Link to='/'>
        <h3>go back home</h3>
      </Link>
    </div>
  )
}

export default Error
