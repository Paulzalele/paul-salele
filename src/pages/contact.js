import * as React from "react"

import Seo from "../components/seo"
import TopNavBar from "../components/nav-components/topnavbar"
import ContactComponent from "../components/contact-components/contact-component"

const Contact = () => (
  <>
  <TopNavBar>
    <Seo title="Contact" />
    
  </TopNavBar>
  <ContactComponent />
  </>
)

export default Contact
