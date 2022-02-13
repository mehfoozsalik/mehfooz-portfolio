import React from "react"

function EductionGrid({ from, to, designation, company, description }) {
  return (
    <div className='single-info-section-edex'>
      <div className='left-section-edex'>
        <div>
          <svg
            width='24'
            height='22'
            viewBox='0 0 24 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15 14.9286C15 15.3627 14.6644 15.7143 14.25 15.7143H9.75C9.33562 15.7143 9 15.3627 9 14.9286V12.5714H0V19.6429C0 20.9 1.05 22 2.25 22H21.75C22.95 22 24 20.9 24 19.6429V12.5714H15V14.9286ZM21.75 4.71429H18V2.35714C18 1.1 16.95 0 15.75 0H8.25C7.05 0 6 1.1 6 2.35714V4.71429H2.25C1.05 4.71429 0 5.81429 0 7.07143V11H24V7.07143C24 5.81429 22.95 4.71429 21.75 4.71429ZM15 4.71429H9V3.14286H15V4.71429Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='verticleLine'></div>
      </div>
      <div className='right-section-edex'>
        <div className='flex-con'>
          <h6>{from}</h6>
          <div className='underline-ee'></div>
          <h6>{to}</h6>
        </div>
        <h6>
          <span className='inside-bold'>{designation}</span> - {company}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default EductionGrid
