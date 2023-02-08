import React from "react"
import Layout from "../components/layout"
import {Link, graphql} from "gatsby"
import { SEO } from "../components/seo"
import { PageProps } from "gatsby"

const discussionTitle = 'Discussion Home'

const DiscussionHomePage = ({ data: {allMdx }}: PageProps<Queries.DiscussionHomePageQuery>) => {
  return (
    <div>
      <Layout pageTitle="Discussion Pages">
        <ul>
          {
            allMdx.nodes.map((node: any) => (
              <article key={node.id}>
                <h2>
                  <Link to={`/discussion/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
            ))
          }
        </ul>
      </Layout>
    </div>
  )
}

export const getDiscussion = graphql`
  query DiscussionHomePage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => (
  <SEO title={discussionTitle} description={'Find thread about your favorite games here!'} pathname={''} children={undefined} />
)

export default DiscussionHomePage
