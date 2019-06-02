/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import is from 'is_js'

import '../global.css'
import styled from 'styled-components'

import Header, { Socials } from "./header"

import weddingWebp from '../images/wedding-bg.webp';
import receptionWebp from '../images/reception-bg.webp';
import weddingJpg from '../images/wedding-bg.jpg';
import receptionJpg from '../images/reception-bg.jpg';


const Background = styled.div.attrs(({ url }) => ({
  url: url
}))`
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: black;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: 100% 100vh;
    filter: brightness(70%);

    @media (max-width: 1024px) {
      background-size: auto 100vh;
    }
  }
`

const Main = styled.main`
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1024px) {
    max-height: calc(100vh - 56px);
  }
`

const Footer = () => (
  <footer className="w-full text-center p-4 bg-black text-lightgrey z-50 fixed bottom-0 lg:relative lg:bottom-auto">
    <div className="lg:w-1/2 mx-auto flex justify-between">
      <div className="text-sm">© {new Date().getFullYear()} Penny House Weddings</div>
      <Socials />
    </div>
  </footer>
)

const Layout = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const safari = is.safari();
  let url = (safari) ? weddingJpg : weddingWebp;
  
  if (isClient) {
    switch (window.location.pathname) {
      case '/':
        url = (safari) ? weddingJpg : weddingWebp;
        break;
      case '/contact/':
          url = (safari) ? receptionJpg : receptionWebp;
          break;
      default:
        url = weddingJpg;
        break;
    }
  }

  return(
    <Background url={url}>
      <div className="relative">
        <Header />
        <Main className="lg:w-1/2 w-full relative overflow-scroll scrolling-touch lg:overflow-visible">{children}</Main>
        <Footer />
      </div>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
