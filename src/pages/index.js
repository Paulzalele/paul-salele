import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import TopNavBar from "../components/nav-components/topnavbar"
import "../components/styles/global.css"


const IndexPage = () => (
  <div>
  <TopNavBar />
  <Seo title="Home" />
   
    
  
  </div>
)

export default IndexPage
