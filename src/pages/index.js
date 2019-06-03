import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

const heading = 'lg:text-7xl lg:h-large h-auto my-12 text-5xl inline-flex flex-col justify-between items-center lg:mt-16 leading-none'

const fab = "rounded-full border border-black bg-white text-black hover:text-black text-2xl text-center leading-snug font-bold fixed bottom-1/10 right-1/10 w-12 h-12 p-2"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p id="company" className="text-red-600 font-sans lg:hidden block">[Penny House Weddings]</p>
    <h1 className={heading}><span>PENNY</span><span>HOUSE</span><span className="font-sans lg:text-5xl text-red-600">[Weddings]</span></h1>
    <Videos />
    <a href="#company" partialActive={true} id="fab" activeClassName="active" className={fab}>^</a>
  </Layout>
)

export default IndexPage
