import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import '../global.css'
import styled from 'styled-components'

import Header, { Socials } from "./header"


const Background = styled(Img)`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  filter: brightness(70%);

  @media (max-width: 1024px) {
    background-size: auto 100vh;
  }
`

const Main = styled.main`
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1024px) {
    max-height: calc(100vh - 112px);
  }
`

const Footer = () => (
  <footer className="w-full text-center p-4 bg-black text-lightgrey z-50 fixed bottom-0 lg:relative lg:bottom-auto">
    <div className="lg:w-1/2 mx-auto flex justify-between">
      <div className="text-sm w-1/2">© {new Date().getFullYear()} Penny House Weddings</div>
      <Socials />
    </div>
  </footer>
)

const Layout = ({ children }) => {
  const isClient = typeof window !== 'undefined';

  let pic;

  const data = useStaticQuery(graphql`
    query {
      wedding: file(relativePath: { eq: "photos/wedding-bg.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reception: file(relativePath: { eq: "photos/reception-bg.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
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
      <div id="top"></div>
      <Header />
      <Main className="lg:w-1/2 w-full relative overflow-scroll scrolling-touch lg:overflow-visible">{children}</Main>
      <Footer />
      <Background fixed={pic} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
