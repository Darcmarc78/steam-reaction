import * as React from 'react'
import Layout from '../../components/layout'
import {SEO} from '../../components/seo'

const BlogPost = () => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export const Head = () => <SEO title="Super Cool Blog Posts" description={''} pathname={''} children={undefined} />

export default BlogPost