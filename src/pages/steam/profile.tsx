import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import { RecentLibrary } from "../../components/recent-library"
const axios = require("axios")

const profileName = "Search Result"
const steamId = "76561198161853165"
const steamID2 = "76561197960434622"

const ProfilePage = () => {
  const [yourSteamId, setyourSteamId] = React.useState("76561198161853165")
  const [playerSummary, setPlayerSummary] = React.useState({})
  const [recentlyPlayed, setRecentlyPlayed] = React.useState([])

  const getPlayerSummary = axios.get(
    "http://localhost:3000/steam-api/get-player-summary",
    {
      params: {
        steamIDParam: yourSteamId,
      },
    }
  )
  const getRecentlyPlayed = axios.get(
    "http://localhost:3000/steam-api/get-recently-played-games",
    {
      params: {
        steamIDParam: yourSteamId,
      },
    }
  )
  // Call get-steam-user with user supplied yourSteamId
  React.useEffect(() => {
    axios
      .all([getPlayerSummary, getRecentlyPlayed])
      .then((res: JSON) => {
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
      <Link to="/friends-list" state={{yourSteamId}}
      >
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
