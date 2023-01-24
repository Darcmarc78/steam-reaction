import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import { SEO } from "../components/seo"
import { PageProps } from "gatsby"

const discussionTitle = 'Discussion Home'

interface DiscussionProps {
  data: {
    allMdx:{
      nodes: any 
    }
  }
}

const DiscussionHomePage = ({ data: {allMdx }}: DiscussionProps) => {
  return (
    <div>
      <Layout pageTitle="Discussion Pages">
        <ul>
          {
            allMdx.nodes.map((node: any) => (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            ))
          }
        </ul>
      </Layout>
    </div>
  )
}

export const getDiscussion = graphql`
  query GetBlogFrontMatter {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => (
  <SEO title={discussionTitle} description={'Find thread about your favorite games here!'} pathname={''} children={undefined} />
)

export default DiscussionHomePage
