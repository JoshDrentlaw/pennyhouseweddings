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

import Header from "./header"

const Main = styled.main`
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;
`

const footer = 'text-center p-4 bg-black text-white'


const Layout = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const safari = is.safari();
  let url = (safari) ?
    'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.png' :
    'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.webp';
  
  if (isClient) {
    switch (window.location.pathname) {
      case '/':
        url = (safari) ?
          'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.png' :
          'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.webp';
        break;
      case '/contact/':
          url = (safari) ?
            'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558707006/pennyhouseweddings/reseption-bg.png' :
            'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558707006/pennyhouseweddings/reseption-bg.webp';
          break;
      default:
        url = 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.png';
        break;
    }
  }

  return(
    <div style={{
      background: `black no-repeat fixed center`,
      backgroundImage: `url(${url})`
    }}>
      <Header />
      <Main className="lg:w-1/2 w-full">{children}</Main>
      <footer className={footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
