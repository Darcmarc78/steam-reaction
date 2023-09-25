import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import { RecentLibrary } from "../../components/recent-library"
const axios = require("axios")

const profileName = "Search Result"

type ProfilePageProps = {
  userSummary: Object
  setUserSummary: React.Dispatch<React.SetStateAction<Object>>
}

const ProfilePage = ({ userSummary, setUserSummary }: ProfilePageProps) => {
  const yourSteamId = "76561198161853165"
  const [playerSummary, setPlayerSummary] = React.useState({})
  const [recentlyPlayed, setRecentlyPlayed] = React.useState([])

  // Call get-steam-user with user supplied yourSteamId
  React.useEffect(() => {}, [])

  return (
    <Layout pageTitle={profileName}>
      <PlayerSummary
        personaName={userSummary.personaname}
        imageURL={userSummary.avatarfull}
        children={undefined}
      />
      <Link to="/steam/friends-list" state={{ playerSummary }}>
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
