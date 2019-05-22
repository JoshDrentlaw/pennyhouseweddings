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
  width: 50%;
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;
`

const footer = 'text-center p-4'

const Layout = ({ children }) => {
  const safari = is.safari();
  let url;
  switch (window.location.pathname) {
    case '/':
      url = (safari) ?
        'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.png' :
        'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1558506290/pennyhouseweddings/wedding-bg.webp';
  }

  return(
    <div style={{
      backgroundImage: `url(${url})`
    }}>
      <Header />
      <Main>{children}</Main>
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
