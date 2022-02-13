import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../Utilities/URL'

const BlogContext = React.createContext()

function BlogProvider({ children }) {
  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(`${url}/api/blog-pages?populate=*`).then((response) => {
      setBlog(response.data)
      setLoading(false)
    })
    return () => {}
  }, [])

  return (
    <BlogContext.Provider
      value={{
        loading,
        blog,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
export { BlogProvider, BlogContext }
