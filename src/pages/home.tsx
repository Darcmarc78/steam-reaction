import * as React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

const HomePage = () => {
  return (
    <Layout pageTitle="Steam Reaction" >
      <p className="text-center">
        Do you ever have trouble finding searching through your huge Steam
        library for games you and your friends own?
      </p>
      <p className="text-center">
        Just enter your Steam Id in the search bar above, and choose a friend!
      </p>
    </Layout>
  )
}

export const Head = () => (
  <SEO title={""} description={""} pathname={""} children={undefined} />
)

export default HomePage
