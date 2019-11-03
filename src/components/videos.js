import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import styled from 'styled-components'

const VideoContainer = styled.div`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`

const VideoItem = styled.div`
    width: calc(100% - 1rem);
    height: 0;
    padding-top: 56.25%;
    margin: 1rem auto;
    position: relative;

    iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
`

const Videos = () => {
    const query = useStaticQuery(graphql`
        {
            vimeoVideo {
                iframe
            }
        }
    `);

    const iframe = query.vimeoVideo.iframe;

    return (
        <VideoContainer className="flex flex-col justify-between items-center">
            <VideoItem>
                {ReactHtmlParser(iframe)}
            </VideoItem>
        </VideoContainer>
    )
}

export default Videos;