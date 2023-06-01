import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import { PageProps } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import getSteamUser from "../../../api/get-steam-user"

const profileName = "Placeholder Profile"

const ProfilePage = () => {
  // Call get-steam-user with user supplied steamId
  let playerSummary = getSteamUser("76561198161853165")
  console.log(playerSummary)
  // Parse returned JSON Object
  return (
    <Layout pageTitle={profileName}>
      <div className="flex flex-row items-center">
        <h1 className="flex flex-1 justify-center text-2xl">{profileName}</h1>
      </div>

      {/* Steam Library Component:
        Horizontal Rule at top
        Width: Viewport span
        < Individual Steam Game> Component
      */}
      <hr className="py-4" />
      <p className="flex flex-1 justify-center py-4 text-3xl">
        [STEAM LIBRARY COMPONENT]
      </p>

      <Link to="/">
        <p>Back to Home</p>
      </Link>
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
