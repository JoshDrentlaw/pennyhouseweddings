import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

const heading = 'lg:text-7xl lg:h-large h-auto mb-12 text-5xl inline-flex flex-col justify-between items-center lg:mt-16 leading-none'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={heading}><span>PENNY</span><span>HOUSE</span><span className="font-sans lg:text-5xl text-red-600">[Weddings]</span></h1>
    <Videos />
  </Layout>
)

export default IndexPage
