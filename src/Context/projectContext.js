import React, { useState } from 'react'
import axios from 'axios'
import url from '../Utilities/URL'

const ProjectContext = React.createContext()

function ProjectProvider({ children }) {
  const [project, setProject] = useState([])
  const [newdata, setNewdata] = React.useState([])
  const [loading, setLoading] = useState(true)

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
  React.useEffect(() => {
    setLoading(true)
    axios.get(`${url}/Projects`).then((response) => {
      setProject(response.data)
      setLoading(false)
    })
    return () => {}
  }, [])

  React.useEffect(() => {
    setNewdata(digitalGraphic)
    return () => {}
  }, [project])
  const filterItems = (category) => {
    if (category === 'brandIdentity') {
      setNewdata(brandIdentity)
    } else if (category === 'digitalGraphic') {
      setNewdata(digitalGraphic)
    } else if (category === 'uiUx') {
      setNewdata(uiUx)
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        loading,
        project,
        newdata,
        filterItems,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export { ProjectProvider, ProjectContext }
