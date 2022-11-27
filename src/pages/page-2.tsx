import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

const SecondPage = () => {
  return (
    <Layout pageTitle=''>
      <p>This is the second page where we want to see SEO optimization</p>
    </Layout>

  )
}

export default SecondPage

export const Head = () => (
  <SEO title='Page Two' description={'This is the SEO "second page"'} pathname={''} children={undefined} />
)