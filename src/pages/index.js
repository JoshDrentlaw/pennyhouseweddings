import React from "react"
import { Link } from 'gatsby'

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

export const H1 = styled.h1`
  font-size: ${props => props.fontSize ? props.fontSize : 'initial'};
  font-family: 'Cinzel';
  text-align: center;
  margin-top: ${props => props.marginTop ? props.marginTop : '1rem'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};

  #top {
    display: block;
    font-size: 30px;
    line-height: 15px;
  }

  #bottom {
    font-size: 34px;
  }

  @media(min-width: 1024px) {
    #top {
      font-size: 40px;
    }

    #bottom {
      font-size: 52px;
    }
  }
`

const H2 = styled.h2`
  font-family: 'Dancing Script';
  font-size: 18px;
  text-align: center;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`

const H3 = styled.h3`
  text-align: center;
  font-size: 25px;
  font-style: italic;
  margin-top: 1rem;
`

const P = styled.p`
  text-align: center;
  margin: 1rem 0;
  font-size: 15px;
  padding: 0 0.5rem;

  .italic {
    font-style: italic;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: calc(95px + 2rem);
`

export const SLink = styled(Link)`
  background-color: #ff6161;
  color: white;
  display: block;
  font-family: 'Cinzel';
  padding: 0.5rem 0;
  width: ${props => props.width ? props.width : '150px'};
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1><span id="top">PENNY HOUSE</span><span id="bottom">WEDDINGS</span></H1>
    <H2>[ Wedding Videography ]</H2>
    <Videos />
    <H3>You've got a story to tell.</H3>
    <P>The day of a wedding can be a roller coaster ride of emotions, and it can swing by in the blink of an eye.</P>
    <P>When it comes to wedding videography, we recognize the importance of getting things right from the start. The wedding and it's formalities will only happen once, and we feel that the responsibility which lies in the craft of wedding videography is often overlooked. Treading cautiously throughout the production process, we strive to produce a video that is about you, and not this year's hottest editing trends. Your film will stand the test of time.</P>
    <P className="italic">Our films are crafted with delicacy, with you in mind.</P>
    <P>Together, let's outline what you're looking for in wedding videography, and create something that stands the test of time.</P>
    <Links>
      <SLink to="/">Gallery</SLink>
      <SLink to="/contact">Contact</SLink>
    </Links>
  </Layout>
)

export default IndexPage
