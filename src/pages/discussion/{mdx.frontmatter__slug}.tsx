import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import {SEO} from '../../components/seo'
import { PageProps } from 'gatsby'

// interface BlogPostProps {
  //   data: {
//     mdx:{
  //       nodes: any 
//     }
//   },
//   children: React.ReactNode
// }

const BlogPostPage = ({data, children}: PageProps<Queries.BlogPostPageQuery>) => {
  const post = data.mdx
  if(!post) console.log('Null')
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export default BlogPostPage

export const query = graphql`
  query BlogPostPage ($id: String) {
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
