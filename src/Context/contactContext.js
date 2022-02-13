import React, { useState, useEffect } from "react"
import axios from "axios"
import url from "../Utilities/URL"

const ContactContext = React.createContext()

function ContactProvider({ children }) {
  const [contact, setContact] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `${url}/api/contact-pages?populate=userInformation.contactInfo.icons`,
      )
      .then((response) => {
        setContact(response.data.data[0].attributes)
        setLoading(false)
      })
    return () => {}
  }, [])

  return (
    <ContactContext.Provider
      value={{
        loading,
        contact,
      }}>
      {children}
    </ContactContext.Provider>
  )
}
export { ContactProvider, ContactContext }
