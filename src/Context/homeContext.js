import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../Utilities/URL'

const HomeContext = React.createContext()

function HomeProvider({ children }) {
  const [home, setHome] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${url}/api/home-pages?populate=home.mainImage`)
      .then((response) => {
        setHome(response.data.data[0].attributes.home)
        setLoading(false)
      })
    return () => {}
  }, [])
  return (
    <HomeContext.Provider
      value={{
        loading,
        home,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
export { HomeProvider, HomeContext }
