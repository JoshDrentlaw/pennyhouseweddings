import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import Layout, { isClient } from '../components/layout'
import { H1, SLink } from './index'

import styled from 'styled-components'

const H2 = styled.h2`
    font-family: 'Cinzel';
    font-size: 45px;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled(Img)`
    margin: 0 -1rem;
`

const P = styled.p`
    text-align: center;
    margin: 1rem 0;
    font-size: 16px;
    padding: 0 0.5rem;

    .italic {
        font-style: italic;
    }
`

const AboutPage = () => {
    let size = (isClient && window.innerWidth >= 1024 ? 'lg' : 'sm');
    const data = useStaticQuery(graphql`
        query {
            sm: file(relativePath: {eq: "photos/about-header-sm.jpg"}) {
                childImageSharp {
                    fluid(toFormat: WEBP) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lg: file(relativePath: {eq: "photos/about-header-lg.jpg"}) {
                childImageSharp {
                    fluid(toFormat: WEBP) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="About" />
            <H2>WHO?</H2>
            <Image fluid={data[size].childImageSharp.fluid} alt="Wedding reception" />
            <Wrapper>
                <H1 marginTop="2rem"><span id="top">PENNY HOUSE</span><span id="bottom">WEDDINGS</span></H1>
                <P>Penny House Weddings was founded with the desire to bring an elegant touch to the world of wedding videography, with a true commitment to the craft. We love what we do, and take great pride in telling your story.</P>
                <P>Every wedding is unique, and so is your story. We believe that your wedding video should be about <span className="italic">you</span>.</P>
                <P>We base our wedding videography in California, with options available for travel and destination weddings. If you're looking for a wedding videographer in California or beyond, drop us a line! We'd love to get to know you.</P>
                <SLink to="/contact/">let's chat!</SLink>
            </Wrapper>
        </Layout>
    )
}

export default AboutPage
