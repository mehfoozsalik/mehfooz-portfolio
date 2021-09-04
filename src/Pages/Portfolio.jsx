import React from 'react'
import Loading from './Loading'

// import imagetest from '../Assests/extra/Rectangle9.jpg'
// import forward from '../Assests/Graphics/Forward.svg'
// import backward from '../Assests/Graphics/Backward.svg'
import PortItems from '../Components/PortItems'
import { ProjectContext } from '../Context/projectContext'

function Portfolio(props) {
  const { loading, newdata, filterItems } = React.useContext(ProjectContext)
  console.log(newdata)
  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='portfolio'>
        <div className='categoryList'>
          <div>
            <h4
              onClick={() => {
                filterItems('brandIdentity')
              }}
            >
              Brand Identity
            </h4>
          </div>
          <div>
            <h4
              onClick={() => {
                filterItems('digitalGraphic')
              }}
            >
              Digital Art
            </h4>
          </div>
          <div>
            <h4
              onClick={() => {
                filterItems('uiUx')
              }}
            >
              Ui Ux
            </h4>
          </div>
        </div>
        <div className='ProjectsGrid'>
          <div className='current'>
            <div className='imageGrid'>
              {newdata.map((items) => {
                return <PortItems key={items.id} {...items} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
