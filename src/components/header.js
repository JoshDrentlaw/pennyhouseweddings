import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0);
`

const Header = () => (
  <Nav>
    <div>
      <span style={{fontSize: '1.5rem'}}>[PENNY HOUSE]</span>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact/'>Contact</Link>
      </div>
    </div>
  </Nav>
)

export default Header
