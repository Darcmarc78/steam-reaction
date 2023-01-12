import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import type { PageProps } from "gatsby"
import { SEO } from "../components/seo"

const discussionTitle = 'Discussion Home'

type discussionProps = {
  data: any
}

const DiscussionHomePage = ({data: PageProps) => {
  return (
    <div>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export const getDiscussion = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => (
  <SEO title={discussionTitle} description={'Find thread about your favorite games here!'} pathname={''} children={undefined} />
)

export default DiscussionHomePage
