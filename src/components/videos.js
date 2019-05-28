import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

const VideoItem = styled.li`
    iframe {
        width: calc(100% - 2rem);
        height: 200px;
        margin: 0 auto 1rem;

        @media(min-width: 768px) {
            height: 400px;
        }

        /* @media(min-width: 1024px) {
            height: 600px;
        } */
    }
`

const Videos = () => {
    const query = useStaticQuery(graphql`
    {
        allVimeoVideo {
            nodes {
                id
                title
                description
                url
                thumbnail {
                    small
                    medium
                    large
                    hd
                }
            }
        }
    }
    `);

    const videoList = query.allVimeoVideo.nodes.map(({ id, title, description, url, thumbnail }) => {
        return (
            <VideoItem key={id}>
                <iframe title={title} src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=149087/`}></iframe>
            </VideoItem>
        )
    })

    return (
        <ul>
            {videoList}
        </ul>
    )
}

export default Videos;