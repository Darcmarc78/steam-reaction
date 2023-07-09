import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import { RecentLibrary } from "../../components/recent-library"
const axios = require("axios")

const profileName = "Search Result"
const steamId = "76561198161853165"

const ProfilePage = () => {
  const [playerSummary, setPlayerSummary] = React.useState({})
  // Call get-steam-user with user supplied steamId
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/forward-to-steam-api", {
        params: {
          steamIDParam: steamId,
        },
      })
      .then((res: JSON) => {
        // handle success
        setPlayerSummary(res.data.response.players[0])
      })
      .catch((error: String) => {
        // handle error
        console.log("Error: " + error)
      })
  }, [])
  return (
    <Layout pageTitle={profileName}>
      {/* PlayerSummary Component */}
      <PlayerSummary
        personaName={playerSummary.personaname}
        imageURL={playerSummary.avatarfull}
        children={undefined}
      />
      {/* Steam Library Component:
            Horizontal Rule at top
            Width: Viewport span
            < Individual Steam Game> Component
            */}
      <hr className="py-4 " />
      <div className="flex-grow border-t-2 border-black " />
      <RecentLibrary />
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
