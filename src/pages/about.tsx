import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <div>
      <Layout pageTitle="About Me">
        <p>
          Hi there! This is a React.js + Gatsby web app that will eventually
          become:
        </p>
        <h1>Steam Reaction</h1>
      </Layout>
    </div>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta
      name="Test-meta-data tag"
      content="Here's the test for the meta-data."
    />
    <meta name="Test-meta-data tag2" content="Seocnd test, is there a limit?" />
  </>
)

export default AboutPage
