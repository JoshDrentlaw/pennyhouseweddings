import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../images/hamburger.inline.svg'
import Instagram from '../images/instagram.inline.svg'
import Vimeo from "../images/vimeo.inline.svg"
import Facebook from '../images/facebook.inline.svg'

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0);
`

const wrapper = 'bg-transparent mx-auto p-4 flex justify-between items-center lg:w-1/2';

const Header = () => (
  <Nav>
    <div className={wrapper}>
      <span className="text-red-600 md:text-base text-lg">[PENNY HOUSE]</span>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white">
          <Hamburger className="fill-current h-3 w-3" />
        </button>
      </div>
      <div>
        <Link className="pr-2" activeClassName="active" to='/'>Home</Link>
        <Link className="pl-2" activeClassName="active" to='/contact/'>Contact</Link>
      </div>
      <div>
        <button className="text-white mr-4">
          <Instagram className="fill-current" />
        </button>
        <button className="text-white mr-4">
          <Vimeo className="fill-current" />
        </button>
        <button className="text-white">
          <Facebook className="fill-current" />
        </button>
      </div>
    </div>
  </Nav>
)

export default Header
