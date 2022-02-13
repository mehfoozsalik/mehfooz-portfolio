import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../Utilities/URL'

const PortfolioContext = React.createContext()

function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(`${url}/api/portfolios?populate=*`).then((response) => {
      setPortfolio(response.data)
      setLoading(false)
    })
    return () => {}
  }, [])
  return (
    <PortfolioContext.Provider
      value={{
        loading,
        portfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
export { PortfolioProvider, PortfolioContext }
