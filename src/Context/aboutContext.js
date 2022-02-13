import React, { useState, useEffect } from "react"
import axios from "axios"
import url from "../Utilities/URL"

const AboutContext = React.createContext()

function AboutProvider({ children }) {
  const [perosnalInfo, setPerosnalInfo] = useState([])
  const [experience, setExperience] = useState([])
  const [skilsContent, setSkillsContent] = useState([])
  const [expedu, setExpEdu] = useState([])
  const [resume, setResume] = useState({})
  const [loading, setLoading] = useState(true)
  const [smallloading, setSmallLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(`${url}/api/abouts?populate=*`).then((response) => {
      setPerosnalInfo(response.data.data[0].attributes.Personalinfo)
      setExperience(response.data.data[0].attributes.experience)
      setExpEdu(response.data.data[0].attributes.EductionExp)
      setLoading(false)
    })
    axios.get(`${url}/api/abouts?populate=Skills.icon`).then((response) => {
      setSkillsContent(response.data.data[0].attributes.Skills)
      setLoading(false)
    })
    return () => {}
  }, [])
  useEffect(() => {
    setSmallLoading(true)
    axios.get(`${url}/api/resume?populate=*`).then((response) => {
      setResume(response.data.data.attributes.resumeCV.data.attributes.url)
      setSmallLoading(false)
    })
    return () => {}
  }, [])

  return (
    <AboutContext.Provider
      value={{
        loading,
        perosnalInfo,
        smallloading,
        resume,
        experience,
        skilsContent,
        expedu,
      }}>
      {children}
    </AboutContext.Provider>
  )
}
export { AboutProvider, AboutContext }
