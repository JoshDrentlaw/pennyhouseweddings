import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../images/hamburger.inline.svg'
import Instagram from '../images/instagram.inline.svg'
import Vimeo from "../images/vimeo.inline.svg"
import Facebook from '../images/facebook.inline.svg'

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0);
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: 'brand links';
`

const Links = styled.div.attrs(({ visibility }) => ({
  visibility: visibility
}))`
  grid-area: links;
  visibility: ${props => props.visibility};
`

const wrapper = 'bg-transparent mx-auto p-4 flex justify-between items-center lg:w-1/2';

const hamburger = "flex items-center px-3 py-2 border rounded text-white border-white";

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <div className="block ml-auto lg:hidden" style={{ gridArea: 'links' }}>
      <button className={hamburger} onClick={toggle}>
        <Hamburger className="fill-current h-3 w-3" />
      </button>
    </div>
  )
}

export const Socials = () => (
  <div>
    <button className="text-white mr-4">
      <Instagram className="fill-current w-4 h-4" />
    </button>
    <button className="text-white mr-4">
      <Vimeo className="fill-current w-4 h-4" />
    </button>
    <button className="text-white">
      <Facebook className="fill-current w-4 h-4" />
    </button>
  </div>
)

const Header = () => {
  const [open, setOpen] = useState(false);

  return(
    <Nav>
      <Wrapper className={wrapper}>
        <span className="text-red-600 md:text-base text-lg whitespace-no-wrap" style={{ gridArea: 'brand' }}>[PENNY HOUSE]</span>
        <HamburgerButton toggle={setOpen} state={open} />
        <Links visibility={(open ? 'visible' : 'hidden')} className="text-white flex flex-col justify-between items-center lg:transparent lg:flex-row lg:visible">
          <div style={{ background: `rgba(16,16,16,0.4)` }}>
            <Link className="block lg:inline lg:pr-2" activeClassName="active" to='/'>Home</Link>
            <Link className="block lg:inline lg:pl-2" activeClassName="active" to='/contact/'>Contact</Link>
          </div>
          <Socials />
        </Links>
      </Wrapper>
    </Nav>
  )
}

export default Header
