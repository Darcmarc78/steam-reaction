import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"

const profileName = "Placeholder Profile"
const searchedID = "76561198161853165"

const ProfilePage = () => {
  return (
    <Layout pageTitle={profileName}>
      {/* PlayerSummary Component */}
      <PlayerSummary steamId={searchedID} children={undefined} />
    </Layout>
  )
}

export default ProfilePage

export const Head = () => (
  <SEO
    title={profileName}
    description={""}
    pathname={""}
    children={undefined}
  />
)
