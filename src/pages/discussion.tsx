import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

const discussionTitle = 'Discussion Home'

const DiscussionHomePage = () => {
  return (
    <div>
      <Layout pageTitle={discussionTitle} >
        <p>Search Bar: "What's your favorite game?"</p>
      </Layout>
    </div>
  )
}

export default DiscussionHomePage

export const Head = () => (
  <SEO title={discussionTitle} description={'Find thread about your favorite games here!'} pathname={''} children={undefined} />
)