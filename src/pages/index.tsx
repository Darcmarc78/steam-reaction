import * as React from 'react'
import Layout from '../components/layout'
import {SEO} from '../components/seo'

const HomePage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => (
  <SEO title={''} description={''} pathname={''} children={undefined} />
) 

export default HomePage