import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Menu from '../assets/svg/menu.inline.svg'

const Nav = styled.nav`
  width: 100%;
  z-index: 50;

  @media(min-width: 1024px) {
    position: relative;
  }
`

const Wrapper = styled.div`
  background-color: rgba(0,0,0,0);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas: 'brand links';
    width: 50%;
  }
`

const Company = styled.span`
  font-family: 'Cinzel';
  font-weight: 300;
  letter-spacing: 2px;
  text-align: center;
  padding: 0 1rem;
  grid-area: brand;
`
//className="font-sans md:text-base text-lg whitespace-no-wrap hidden lg:inline"

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-area: links;
  position: relative;
  visibility: visible;
  width: 50%;
  z-index: 10;

  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

const Hamburgerbutton = styled.button`
  display: flex;
  align-items: center;
  color: black;
  background-color: white;
  width: 3rem;
  height: 2rem;

  svg {
    margin: auto;
  }
`

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
    let btn = document.querySelector('#hamburger')
    btn.classList.toggle('is-active')
  }

  return (
    <div className="block ml-auto z-50 lg:hidden" style={{ gridArea: 'links' }}>
      <button id="hamburger" class="hamburger hamburger--slider" type="button" onClick={toggle}>
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )

  /* return (
    <div className="block ml-auto z-50 lg:hidden" style={{ gridArea: 'links' }}>
      <Hamburgerbutton onClick={toggle}>
        <Menu className="fill-current inline" />
      </Hamburgerbutton>
    </div>
  ) */
}

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return(
    <Nav>
      <Wrapper>
        <Company>[PENNY HOUSE WEDDINGS]</Company>
        <Links open={open}>
          <div className="">
            <Link className="block lg:inline lg:pr-2 lg:border-none border-b-2 border-white" activeClassName="active" to='/'>Home</Link>
            <Link className="block lg:inline lg:pl-2" activeClassName="active" to='/contact/'>Contact</Link>
          </div>
        </Links>
        <HamburgerButton toggle={setOpen} state={open} />
      </Wrapper>
    </Nav>
  )
}

export default Header
