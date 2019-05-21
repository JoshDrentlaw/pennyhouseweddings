import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const heading = 'text-7xl inline-flex flex-col justify-between items-center mt-24 leading-none'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={heading} style={{ height: '250px' }}><span>PENNY</span><span>HOUSE</span><span className="font-sans text-5xl text-red-600">[Weddings]</span></h1>
  </Layout>
)

export default IndexPage
