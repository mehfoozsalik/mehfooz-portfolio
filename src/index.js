import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "aos/dist/aos.css"
import App from "./App"
// import { ProjectProvider } from './Context/projectContext'
import { HomeProvider } from "./Context/homeContext"
import { AboutProvider } from "./Context/aboutContext"
import { ContactProvider } from "./Context/contactContext"
import { PortfolioProvider } from "./Context/portfolioContext"
import { BlogProvider } from "./Context/blogContext"

ReactDOM.render(
  <HomeProvider>
    <AboutProvider>
      <ContactProvider>
        <PortfolioProvider>
          <BlogProvider>
            <App />
          </BlogProvider>
        </PortfolioProvider>
      </ContactProvider>
    </AboutProvider>
  </HomeProvider>,
  document.getElementById("root"),
)
