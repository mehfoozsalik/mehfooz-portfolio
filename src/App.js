import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
///importing components
import Logo from "./Components/Logo"
import ScrollTop from "./Utilities/ScrollTop"
import NavItems from "./Components/navigation/NavItems"
import ScrollToTopBtn from "./Components/ScrollToTopBtn"
import Loading from "./Components/Loading"
///import Pages
const About = React.lazy(() => import("./Pages/About"))
const Home = React.lazy(() => import("./Pages/Home"))
const Blogs = React.lazy(() => import("./Pages/Blogs"))
const BlogDetail = React.lazy(() => import("./Pages/BlogDetail"))
const Contact = React.lazy(() => import("./Pages/Contact"))
const Portfolio = React.lazy(() => import("./Pages/Portfolio"))
const PortfolioDetail = React.lazy(() => import("./Pages/PortfolioDetail"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollTop />
        <ScrollToTopBtn />
        <NavItems />
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='portfolio' element={<Portfolio />} />
          <Route path='portfolio/:id' element={<PortfolioDetail />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='blogs' element={<Blogs />} />
          <Route exact path='blogs/:id' element={<BlogDetail />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
