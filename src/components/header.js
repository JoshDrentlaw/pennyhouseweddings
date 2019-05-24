import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0);
`

const wrapper = 'bg-transparent mx-auto p-4 flex justify-between items-center lg:w-1/2';

const Header = () => (
  <Nav>
    <div className={wrapper}>
      <span className="text-red-600 md:text-base text-lg">[PENNY HOUSE]</span>
      <div>
        <Link className="pr-2" activeClassName="active" to='/'>Home</Link>
        <Link className="pl-2" activeClassName="active" to='/contact/'>Contact</Link>
      </div>
      <div>
        <p>social icons</p>
      </div>
    </div>
  </Nav>
)

export default Header
