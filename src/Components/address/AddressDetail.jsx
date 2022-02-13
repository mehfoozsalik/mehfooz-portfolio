import React from "react"

function AddressDetail({ image, head, detail }) {
  return (
    <div className='single-address-section'>
      <div className='address-section-image'>
        <img src={image} alt='' />
      </div>
      <div className='address-section-detail'>
        <h6>{head}</h6>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default AddressDetail
