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

//import weddingJpeg from '../images/wedding-bg.jp2';
import weddingWebp from '../images/wedding-bg.webp';
//import receptionJpeg from '../images/reception-bg.jp2';
import receptionWebp from '../images/reception-bg.webp';

const Background = styled.div.attrs(({ url }) => ({
  url: url
}))`
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: black url(${props => props.url}) no-repeat fixed top;
    filter: brightness(70%);
  }
`

const Main = styled.main`
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;
`

const footer = 'text-center p-4 bg-black text-lightgrey'

const Layout = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const safari = is.safari();
  let url = (safari) ? 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.jp2' : weddingWebp;
  
  if (isClient) {
    switch (window.location.pathname) {
      case '/':
        url = (safari) ? 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.jp2' : weddingWebp;
        break;
      case '/contact/':
          url = (safari) ? 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558707006/pennyhouseweddings/reseption-bg.jp2' : receptionWebp;
          break;
      default:
        url = 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.jp2';
        break;
    }
  }

  return(
    <Background url={url}>
      <div style={{ position: 'relative' }}>
        <Header className="sticky" />
        <Main className="lg:w-1/2 w-full">{children}</Main>
        <footer className={footer}>
          <div className="lg:w-1/2 mx-auto flex justify-between">
            <div className="text-sm">© {new Date().getFullYear()} Penny House Weddings</div>
            <Socials />
          </div>
          
        </footer>
      </div>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
