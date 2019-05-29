import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../images/hamburger.inline.svg'
import Instagram from '../images/instagram.inline.svg'
import Vimeo from "../images/vimeo.inline.svg"
import Facebook from '../images/facebook.inline.svg'

const Nav = styled.nav`
  position: sticky;
  background-color: rgba(0, 0, 0, 0);
`

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas: 'brand links';
  }
`

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`
  grid-area: links;
  position: relative;

  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    width: 40vw; height: 100vh;
    padding: 1rem;
    padding-top: 4rem;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
  }
`

const wrapper = 'bg-transparent mx-auto p-4 flex justify-between items-center lg:w-1/2';

const hamburger = "flex items-center px-3 py-2 border rounded text-white border-white";

const links =
  `text-white flex flex-col justify-start items-start bg-transblack z-10
  lg:bg-transparent lg:flex-row lg:justify-between lg:visible`;

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <div className="block ml-auto z-50 lg:hidden" style={{ gridArea: 'links' }}>
      <button className={hamburger} onClick={toggle}>
        <Hamburger className="fill-current h-3 w-3" />
      </button>
    </div>
  )
}

export const Socials = () => (
  <div className="pl-px2">
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
        <Links open={open} className={links}>
          <div className="lg:border-none border-b-2 border-white">
            <Link className="block lg:inline lg:pr-2" activeClassName="active" to='/'>Home</Link>
            <Link className="block lg:inline lg:pl-2" activeClassName="active" to='/contact/'>Contact</Link>
          </div>
          <Socials />
        </Links>
        <HamburgerButton toggle={setOpen} state={open} />
      </Wrapper>
    </Nav>
  )
}

export default Header
