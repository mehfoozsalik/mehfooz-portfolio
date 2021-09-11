import React from 'react'
import PortItems from './PortItems'
import { Link, useRouteMatch, Route } from 'react-router-dom'
import { useParams } from 'react-router'

import Projects from '../Pages/Projects'
function ProjectItems({ newdata }) {
  const { path, url } = useRouteMatch()
  const { category } = useParams()
  const exactdata = newdata.find((items) => items.cate === category)
  return (
    <div className='ProjectsGrid'>
      <div className='current'>
        <div className='imageGrid'>
          {exactdata.data.map((items) => {
            return (
              <Link to={`${url}/${items.id}`}>
                <PortItems key={items.id} {...items} />
              </Link>
            )
          })}
        </div>
      </div>
      <Route path={`${path}/:id`}>
        <Projects exactdata={exactdata.data} />
      </Route>
    </div>
  )
}

export default ProjectItems
