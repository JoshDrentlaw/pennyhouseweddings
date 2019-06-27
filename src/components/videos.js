import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import styled from 'styled-components'

const VideoItem = styled.div`
    width: calc(100% - 1rem);
    height: 0;
    padding-top: 56.25%;
    margin: 0.5rem auto 0.5rem;
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
            allVimeoVideo(filter: { title: { regex: "/Wedding/" }}) {
                nodes {
                    id
                    iframe
                }
            }
        }
    `);

    const videoList = query.allVimeoVideo.nodes.map(({ id, iframe }) => {
        return (
            <VideoItem key={id}>
                {ReactHtmlParser(iframe, {
                    transform(node) {
                        node.attribs.width = 'auto';
                        node.attribs.height = 'auto';
                    }
                })}
            </VideoItem>
        )
    })

    return (
        <div className="flex flex-col justify-between items-center">
            {videoList}
        </div>
    )
}

export default Videos;