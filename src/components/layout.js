import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import '../global.css'
import styled from 'styled-components'

import Header, { Socials } from "./header"


const Background = styled(BackgroundImage)`
  top: 0; left: 0;
  width: 100vw; height: 100vh;

  :before {
    position: fixed;
    width: 100%; height: 100vh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(70%);
  }
`

const Main = styled.main`
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;

  @media(max-width: 1024px) {
    margin-bottom: 56px;
  }
`

const Footer = () => (
  <footer className="w-full text-center p-4 bg-black text-lightgrey z-50 fixed bottom-0 lg:relative lg:bottom-auto">
    <div className="lg:w-1/2 mx-auto flex justify-between">
      <div className="text-sm text-left w-auto">© {new Date().getFullYear()} Penny House Weddings</div>
      <Socials className="w-auto" />
    </div>
  </footer>
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

  let pic = data.wedding.childImageSharp.fluid;
  
  if (isClient) {
    switch (window.location.pathname) {
      case '/':
        pic = data.wedding.childImageSharp.fluid;
        break;
      case '/contact/':
        pic = data.reception.childImageSharp.fluid;
        break;
      default:
        pic = data.wedding.childImageSharp.fluid;
        break;
    }
  }

  return(
      <div className="relative">
        <Background fluid={pic} Tag="div" style={{ position: 'fixed' }} />
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
