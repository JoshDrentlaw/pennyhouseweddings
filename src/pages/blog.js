import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import Layout from '../components/layout'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark

    return (
        <Layout>
            <SEO title="Blog" description="Get to know Adam King, the man behind Penny House Weddings. Here he shares his favorite memories from the most beautiful weddings and amazing clients." />
            <div style={{ color: `white`, backgroundColor: `rgba(112, 128, 144, 0.8)`, borderRadius: `10px`, padding: `1em` }}>
                <h1 style={{ fontSize: `2em`, marginBottom: `1em` }}>Penny House Wedding Blog<small style={{ margin: `1em 0`, fontSize: `0.5em` }}> - {posts.totalCount} Posts</small></h1>
                
                {posts.edges.map(({ node }) => (
                    <div key={node.id} style={{ margin: `1em` }}>
                        <Link to={node.fields.slug}>
                            <h3>{node.frontmatter.title}</h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Blog