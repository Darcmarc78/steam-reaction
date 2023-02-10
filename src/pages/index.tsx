import * as React from 'react'
import Layout from '../components/layout'
import {SEO} from '../components/seo'

const HomePage = () => {
  return (
    <Layout pageTitle='Steam Reaction'>
      <p>Place the search bar here</p>

    </Layout>
  )
}

export const Head = () => (
  <SEO title={''} description={''} pathname={''} children={undefined} />
) 

export default HomePage