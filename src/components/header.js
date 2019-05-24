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
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
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
