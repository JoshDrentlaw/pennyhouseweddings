import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import styled from 'styled-components'

import Layout from '../components/layout'

const H1 = styled.h2`
    font-family: 'Cinzel';
    font-size: 45px;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`

const VideoFrame = styled.div`
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    position: relative;
    margin-bottom: 1rem;
    
    iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
`

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query {
            allVimeoVideo(filter: {title: {regex: "/Wedding/"}}) {
                edges {
                    node {
                        iframe
                    }
                }
            }
        }
    `)

    const videos = data.allVimeoVideo;

    return (
        <Layout>
            <SEO title="Gallery" description="" />
            <H1>Cinema</H1>
            <div>
                {videos.edges.map(({ node }) => {
                    const markup = () => {return {__html: node.iframe}}
                    return (
                        <VideoFrame key={node.id}>
                            <div dangerouslySetInnerHTML={markup()} />
                        </VideoFrame>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Gallery