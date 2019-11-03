import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'

import '../global.css'
import styled from 'styled-components'

import Header, { Socials } from "./header"

const Main = styled.main`
  font-family: 'Raleway';
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 0 1rem;

  @media(max-width: 1024px) {
    margin-bottom: 56px;
  }
`

const SFooter = styled.footer`
  width: 100%;
  text-align: center;

  div {
    text-align: center;
  }

  a {
    background-color: black;
    border-radius: 99999px;
    padding: 0.25rem;
  }
`

const Footer = () => (
  <SFooter>
    <Socials />
    <p>© {new Date().getFullYear()} Penny House Weddings</p>
  </SFooter>
)

const Layout = ({ children }) => {
  const isClient = typeof window !== 'undefined';

  const data = useStaticQuery(graphql`
    query {
      wedding: file(relativePath: { eq: "photos/wedding-bg.jpg"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reception: file(relativePath: { eq: "photos/reception-bg.jpg"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return(
      <div className="relative">
        <div id="top"></div>
        <Header />
        <Main className="lg:w-1/2 w-full h-full relative scrolling-touch">{children}</Main>
        <Footer />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
