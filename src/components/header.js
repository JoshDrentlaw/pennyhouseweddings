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
    width: 80vw; height: 100vh;
    padding-left: 2.5rem;
    padding-top: 7rem;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
    box-shadow: 0px 0px 40px 0px black;
  }
`

const Shadow = styled.div`
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  width: 100%;
  height: 200vh;
  position: absolute;
  background-image: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
  z-index: 9;
  transform: translateX(-50px);
`

const SLink = styled(Link)`
  color: black;
  display: block;
  font-size: 18px;
  margin-bottom: 1.5rem;

  @media(min-width: 1024px) {
    display: inline;
    padding-right: 0.5rem;
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

const HamburgerButton = (props) => (
  <div className="block ml-auto z-50 lg:hidden" style={{ gridArea: 'links' }}>
    <button id="hamburger" className={`hamburger hamburger--slider ${props.state ? 'is-active' : null}`} type="button" onClick={() => props.toggle(!props.state)}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  </div>
)

const Header = (props) => {

  return(
    <Nav>
      <Wrapper>
        <Company>[PENNY HOUSE WEDDINGS]</Company>
        <Links id="links" open={props.open}>
          <div>
            <SLink activeClassName="active" to='/'>home</SLink>
            <SLink activeClassName="active" to='/gallery/'>gallery</SLink>
            <SLink activeClassName="active" to='/about/'>about</SLink>
            <SLink activeClassName="active" to='/contact/'>contact</SLink>
          </div>
        </Links>
        <Shadow open={props.open}></Shadow>
        <HamburgerButton toggle={props.setOpen} state={props.open} />
      </Wrapper>
    </Nav>
  )
}

export default Header
