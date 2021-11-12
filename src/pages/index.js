import * as React from "react"
import Seo from "../components/seo"
import TopNavBar from "../components/nav-components/topnavbar"
import "../components/styles/global.css"
import PaulBackground from "../components/paul-background"
import WebShare from "../components/webshare/webshare"

const IndexPage = () => (
  <div>
  <Seo title="Home" />
  <TopNavBar />
  <PaulBackground />
  <WebShare />
    
  
  </div>
)

export default IndexPage
