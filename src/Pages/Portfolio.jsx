import React from 'react'
import Loading from './Loading'
import { NavLink, Route, useRouteMatch, Redirect } from 'react-router-dom'
// import imagetest from '../Assests/extra/Rectangle9.jpg'
// import forward from '../Assests/Graphics/Forward.svg'
// import backward from '../Assests/Graphics/Backward.svg'
import ProjectItems from '../Components/ProjectItems'

import { ProjectContext } from '../Context/projectContext'

function Portfolio(props) {
  const { loading, uiUx, brandIdentity, digitalGraphic } =
    React.useContext(ProjectContext)
  const { path, url } = useRouteMatch()

  const newdata = [
    { cate: 'Brand Identity', data: brandIdentity },
    { cate: 'Ui Ux', data: uiUx },
    { cate: 'Digital Graphic', data: digitalGraphic },
  ]
  if (loading === true) {
    return <Loading />
  } else {
    return (
      <div className='portfolio'>
        <div className='categoryList'>
          {newdata.map((items) => {
            return (
              <div>
                <NavLink
                  to={`${url}/${items.cate}`}
                  className='TabLink'
                  activeClassName='ActiveTab'
                >
                  {items.cate}
                </NavLink>
              </div>
            )
          })}
        </div>

        <Route path={`${path}/:category`}>
          <ProjectItems newdata={newdata} />
        </Route>
        <Redirect from='/portfolio' to='/portfolio/Ui%20Ux' />
      </div>
    )
  }
}

export default Portfolio
