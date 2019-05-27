import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const heading = 'lg:text-7xl lg:h-large h-small text-5xl inline-flex flex-col justify-between items-center lg:mt-16 leading-none'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={heading}><span>PENNY</span><span>HOUSE</span><span className="font-sans lg:text-5xl text-red-600">[Weddings]</span></h1>
  </Layout>
)

export default IndexPage
