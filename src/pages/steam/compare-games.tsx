import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import getOwnedGames from "../../hooks/get-owned-games"

const axios = require("axios")

const pageTitle = "Compared Games"

// Get playerSummary and Friendslist from previous component
const CompareGamesPage = (summariesObject: Object) => {
  let userOwnedGames = []
  let friendOwnedGames = []
  const [commonGames, setCommonGames] = React.useState([])

  React.useEffect(() => {
    // Get User Games
    getOwnedGames(summariesObject.location.state.userSummary.steamid)
      .then((returnedUserGames: Array<Object>) => {
        userOwnedGames = returnedUserGames
      })
      .catch((error: String) => {
        console.log("Error: " + error)
      })
    // Get Friend's Games
    getOwnedGames(summariesObject.location.state.friendSummary.friendId)
      .then((returnedFriendGames: Array<Object>) => {
        friendOwnedGames = returnedFriendGames
      })
      .catch((error: String) => {
        console.log("Error: " + error)
      })
    // Get Common games
    Promise.all([])
      .then((res: Array<Object>) => {})
      .catch((error: String) => {})
  }, [])

  return (
    <Layout pageTitle={pageTitle}>
      <div className=" grid grid-cols-2 divide-x-4">
        <PlayerSummary
          personaName={summariesObject.location.state.userSummary.personaname}
          imageURL={summariesObject.location.state.userSummary.avatarfull}
          children={undefined}
        />
        <PlayerSummary
          personaName={summariesObject.location.state.friendSummary.personaName}
          imageURL={summariesObject.location.state.friendSummary.avatarImage}
          children={undefined}
        />
      </div>
      <hr className="py-4 " />
      <div className="flex-grow border-t-2 border-black py-4" />
      {/* Compared Games Library Component
        Uses "Same Games" method  */}
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </Layout>
  )
}

export default CompareGamesPage

export const Head = () => (
  <SEO title={pageTitle} description={""} pathname={""} children={undefined} />
)
