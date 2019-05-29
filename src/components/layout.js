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
const weddingJP2 = 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.jp2';
const receptionJP2 = 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558707006/pennyhouseweddings/reseption-bg.jp2';


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
    background-position: top;
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
  let url = (safari) ? weddingJP2 : weddingWebp;
  
  if (isClient) {
    switch (window.location.pathname) {
      case '/':
        url = (safari) ? weddingJP2 : weddingWebp;
        break;
      case '/contact/':
          url = (safari) ? receptionJP2 : receptionWebp;
          break;
      default:
        url = weddingJP2;
        break;
    }
  }

  return(
    <Background url={url}>
      <div style={{ position: 'relative' }}>
        <Header />
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
