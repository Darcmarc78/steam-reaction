import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import { SEO } from "../components/seo"
import { PageProps } from "gatsby"

const discussionTitle = 'Discussion Home'

interface DiscussionProps {
  data: {
    allFile:{
      nodes: any 
    }
  }
}

const DiscussionHomePage = ({ data: {allFile }}: DiscussionProps) => {
  return (
    <div>
      <Layout pageTitle="Discussion Pages">
        <ul>
          {
            allFile.nodes.map((node: any) => (
              <li key={node.name}>
                {node.name}
              </li>
            ))
          }
        </ul>
      </Layout>
    </div>
  )
}

export const getDiscussion = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "blog"}}){
      nodes{
        name
      }
    }
  }
`

export const Head = () => (
  <SEO title={discussionTitle} description={'Find thread about your favorite games here!'} pathname={''} children={undefined} />
)

export default DiscussionHomePage
