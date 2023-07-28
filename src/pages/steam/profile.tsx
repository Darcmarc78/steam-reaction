import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import { RecentLibrary } from "../../components/recent-library"
const axios = require("axios")

const profileName = "Search Result"

const ProfilePage = () => {
  const [yourSteamId, setyourSteamId] = React.useState("76561198161853165")
  const [playerSummary, setPlayerSummary] = React.useState({})
  const [recentlyPlayed, setRecentlyPlayed] = React.useState([])

  // Call get-steam-user with user supplied yourSteamId
  React.useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/steam-api/get-player-summary", {
        params: {
          steamIDParam: yourSteamId,
        },
      }),
      axios.get("http://localhost:3000/steam-api/get-recently-played-games", {
        params: {
          steamIDParam: yourSteamId,
        },
      }),
    ])
      .then((res: Array<Object>) => {
        // handle success
        setPlayerSummary(res[0].data.response.players[0])
        setRecentlyPlayed(res[1].data.response.games)
      })
      .catch((error: String) => {
        // handle error
        console.log("Error: " + error)
      })
  }, [])

  return (
    <Layout pageTitle={profileName}>
      <PlayerSummary
        personaName={playerSummary.personaname}
        imageURL={playerSummary.avatarfull}
        children={undefined}
      />
      <Link to="/friends-list" state={{ yourSteamId }}>
        <p>To Friends List</p>
      </Link>
      <hr className="py-4 " />
      <div className="flex-grow border-t-2 border-black py-4" />
      <RecentLibrary
        recentlyPlayedLibrary={recentlyPlayed}
        children={undefined}
      />
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
