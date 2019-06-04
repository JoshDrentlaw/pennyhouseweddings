import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

const heading = 'lg:text-7xl lg:h-large h-auto my-12 text-5xl inline-flex flex-col justify-between items-center lg:mt-16 leading-none'

const fab = "rounded-full border border-black bg-white text-black hover:text-black text-4xl font-bold fixed bottom-1/10 right-1/10 w-12 h-12 flex justify-center items-center"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="text-red-600 font-sans lg:hidden block">[Penny House Weddings]</p>
    <h1 className={heading}><span>PENNY</span><span>HOUSE</span><span className="font-sans lg:text-5xl text-red-600">[Weddings]</span></h1>
    <Videos />
    <Link to="#top" className={fab}>^</Link>
  </Layout>
)

export default IndexPage
