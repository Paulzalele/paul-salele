import * as React from "react"

import Seo from "../components/seo"
import TopNavBar from "../components/nav-components/topnavbar"
import ContactSuccess from "../components/contact-components/contact-sucess"

const Contact = () => (
  <>
  <TopNavBar>
    <Seo title="Testing" />
    
  </TopNavBar>
  <ContactSuccess/>
  </>
)

export default Contact