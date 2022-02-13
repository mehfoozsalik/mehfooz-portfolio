import React from "react"
function SkillsContainer({ skilIcon, subtitle }) {
  return (
    <div className='svgContainer'>
      <img src={skilIcon} alt='' />
      <h6>{subtitle}</h6>
    </div>
  )
}

export default SkillsContainer
