import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
import getOwnedGames from "../../hooks/get-owned-games"
import findCommonGames from "../../hooks/find-common-games"

const axios = require("axios")

const pageTitle = "Compared Games"

// Get playerSummary and Friendslist from previous component
const CompareGamesPage = (summariesObject: Object) => {
  let isFriendsLibraryPublic = true
  const [commonGames, setCommonGames] = React.useState([])

  React.useEffect(() => {
    // Get Common games

    Promise.all([
      findCommonGames(
        summariesObject.location.state.userSummary.steamid,
        summariesObject.location.state.friendSummary.friendId
      ),
    ])
      .then((res: any) => {
        if (res.length == 0) publicFriendsLibrary = false
        // console.log(res)
      })
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
      {isFriendsLibraryPublic == true ? (
        <p> Library!</p>
      ) : (
        <p>Friends Library Not Public</p>
      )}
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
