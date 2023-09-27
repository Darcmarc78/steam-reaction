import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import { RecentLibrary } from "../../components/recent-library"
import getRecentlyPlayedGames from "../../hooks/get-recently-played-games"
import getPlayerSummary from "../../hooks/get-player-summary"

const profileName = "Search Result"

const ProfilePage = (paramObject: Object) => {
  let yourSteamId = ""
  const [userSummary, setUserSummary] = React.useState({})
  const [recentlyPlayed, setRecentlyPlayed] = React.useState([])
  // Call get-steam-user with user supplied yourSteamId
  React.useEffect(() => {
    if (
      paramObject.location.state.userSteamId != null ||
      paramObject.location.state.userSteamId != undefined
    ) {
      yourSteamId = paramObject.location.state.userSteamId
      getRecentlyPlayedGames(yourSteamId)
        .then((res: Array<Object>) => {
          setRecentlyPlayed(res)
        })
        .catch((err: string) => {})
      getPlayerSummary(yourSteamId)
        .then((res: Object) => {
          setUserSummary(res)
        })
        .catch((err: string) => {
          console.log(err)
        })
    }
    
  }, [])

  return (
    <Layout pageTitle={profileName}>
      <PlayerSummary
        personaName={userSummary.personaname}
        imageURL={userSummary.avatarfull}
        children={undefined}
      />
      <Link to="/steam/friends-list" state={{ userSummary }}>
        <p>To Friends List</p>
      </Link>
      <hr className="py-4 " />
      <div className="flex-grow border-t-2 border-black py-4" />
      <RecentLibrary
        recentlyPlayedLibrary={recentlyPlayed}
        title="Recently Played Library"
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
