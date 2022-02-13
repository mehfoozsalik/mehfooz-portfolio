import React from "react"
import MainTitle from "../Components/MainTitle"
import PersonalInfo from "../Components/PersonalInfo"
import { motion } from "framer-motion"
import SkilSet from "../Components/SkillsSet/SkilSet"
import EduContainer from "../Components/EduContainer"
import { AboutContext } from "../Context/aboutContext"
import Loading from "../Components/Loading"

function About(props) {
  const {
    loading,
    perosnalInfo,
    smallloading,
    resume,
    experience,
    skilsContent,
    expedu,
  } = React.useContext(AboutContext)

  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "-100vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='fade-out-effect'></motion.div>
        <div className='page-container'>
          <MainTitle backTitle='Resume' first='About' second='Us' />
          <PersonalInfo
            perosnalInfo={perosnalInfo}
            resume={resume}
            smallloading={smallloading}
            experience={experience}
          />
          <hr />
          <motion.div
            whileHover={{ skew: 0.3, scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className='subTitle'>
            <h2>SKILLS</h2>
            <SkilSet skilsContent={skilsContent} />
          </motion.div>
          <hr />
          <motion.div
            whileHover={{ skew: 0.3, scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className='subTitle'>
            <h2>EDUCATION & EXPErience</h2>
            <EduContainer expedu={expedu} />
          </motion.div>
        </div>
      </div>
    )
  }
}

export default About
