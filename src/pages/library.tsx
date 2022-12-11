import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const LibraryPage = () => {
  return (
    <div>
      <Layout pageTitle='Your Library' >
        <p>H E R E L I E S T H E L I B R A R Y </p>
        <StaticImage src='../images/library-image.png' alt='stock image of library'/>
      </Layout>
    </div>
  )
}

export const Head = () => <title>Your Library</title>

export default LibraryPage