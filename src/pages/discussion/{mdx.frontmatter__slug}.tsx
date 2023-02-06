import { graphql } from 'gatsby'
import { maxHeaderSize } from 'http'
import * as React from 'react'
import Layout from '../../components/layout'
import {SEO} from '../../components/seo'


interface BlogPostProps {
  data: {
    mdx:{
      nodes: any 
    }
  },
  children: React.ReactNode
}

const BlogPost = ({data: {mdx}, children}: BlogPostProps) => {
  return (
    <Layout pageTitle={mdx.nodes.frontmatter.title}>
      <p>{mdx.nodes.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

interface HeadLayerProps{
  data: {
    mdx:{
      nodes: any 
    }
  }
}

export const Head = ({data: {mdx}} : HeadLayerProps) => <SEO title={mdx.nodes.frontmatter.title} description={''} pathname={''} children={undefined} />

export default BlogPost