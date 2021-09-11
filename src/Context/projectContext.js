import React, { useState } from 'react'
import axios from 'axios'
import url from '../Utilities/URL'

const ProjectContext = React.createContext()

function ProjectProvider({ children }) {
  const [project, setProject] = useState([])

  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    setLoading(true)
    axios.get(`${url}/Projects`).then((response) => {
      setProject(response.data)
      setLoading(false)
    })
    return () => {}
  }, [])
  const brandIdentity = project.filter((items) => {
    return items.gallery.galleryTitle === 'Brand Identity'
  })
  const digitalGraphic = project.filter((items) => {
    return items.gallery.galleryTitle === 'Illustration'
  })

  const uiUx = project.filter((items) => {
    return (
      items.gallery.galleryTitle === 'Mobie Ui' ||
      items.gallery.galleryTitle === 'Website Ui'
    )
  })
  return (
    <ProjectContext.Provider
      value={{
        loading,
        brandIdentity,
        digitalGraphic,
        uiUx,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export { ProjectProvider, ProjectContext }
