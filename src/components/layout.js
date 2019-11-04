import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'

import '../global.css'
import styled from 'styled-components'

import Instagram from '../assets/svg/instagram.inline.svg'
import Vimeo from '../assets/svg/vimeo.inline.svg'
import Facebook from '../assets/svg/facebook.inline.svg'
import Youtube from '../assets/svg/youtube.inline.svg'
import Linkedin from '../assets/svg/linkedin.inline.svg'

import Triangle from '../assets/svg/triangle.inline.svg'

import Header from "./header"

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
  border-top: 1px solid #a5a5a5;
  padding: 1rem 0;

  div {
    display: flex;
    justify-content: space-evenly;
    padding: 0 3rem;
  }
  
  svg {
    display: inline;
    fill: currentColor;
  }
`

const Socials = () => (
  <div>
    <a href="https://www.instagram.com/pennyhouseweddings/">
      <Instagram />
    </a>
    <a href="https://vimeo.com/pennyhouseweddings">
      <Vimeo />
    </a>
    <a href="https://www.facebook.com/pennyhouseweddings/?ref=py_c">
      <Facebook />
    </a>
    <a href="/">
      <Youtube />
    </a>
    <a href="https://www.linkedin.com/in/adam-king-249994190/">
      <Linkedin />
    </a>
  </div>
)

const Footer = () => (
  <SFooter>
    <Socials />
    <p>© {new Date().getFullYear()} Penny House Weddings</p>
  </SFooter>
)

const Fab = styled.a`
  position: fixed;
  bottom: 10%;
  right: 10%;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 66, 66, 0.7);
  padding: 1rem;
  border-radius: 5px;

  &:focus, &:visited, &:hover {
    color: rgba(255, 66, 66, 0.7);
  }

  svg {
    fill: currentColor;
    width: 17px;
    height: 17px;
  }
`

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
        <Fab href="#top"><Triangle /></Fab>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
