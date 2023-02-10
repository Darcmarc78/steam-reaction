import * as React from 'react'
import Layout from '../components/layout'
import Searchbar from '../components/searchbar'
import {SEO} from '../components/seo'

const HomePage = () => {
  return (
    <Layout pageTitle='Steam Reaction'>
      <Searchbar />
    </Layout>
  )
}

export const Head = () => (
  <SEO title={''} description={''} pathname={''} children={undefined} />
) 

export default HomePage