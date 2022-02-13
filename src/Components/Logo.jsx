import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import URL from "../Utilities/URL"
import SmallLoading from "./SmallLoading"
function Logo(props) {
  const [logo, setLogo] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(`${URL}/api/logo?populate=*`).then((response) => {
      setLogo(response.data.data.attributes.logo.data.attributes)
      setLoading(false)
    })
    return () => {}
  }, [])
  const { url } = logo
  return (
    <div className='logoContainer'>
      <NavLink to='/'>
        {loading ? <SmallLoading /> : <img src={url} alt='' />}
      </NavLink>
    </div>
  )
}

export default Logo
