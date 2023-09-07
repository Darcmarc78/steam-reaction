import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import PlayerSummary from "../../components/playersummary"
const axios = require("axios")

const pageTitle = "Compared Games"

const CompareGamesPage = () => {
  //
  React.useEffect(() => {
    // Get MyGames
    // Get FriendsGames
    // Get ComparedGames
    Promise.all([])
      .then((res: Array<Object>) => {})
      .catch((error: String) => {})
  }, [])

  return (
    <Layout pageTitle={pageTitle}>
      <div className=" grid divide-x-4 grid-cols-2">
        <PlayerSummary
          personaName={"YourProfile"}
          imageURL={"friend.avatarImage"}
          children={undefined}
        />
        <PlayerSummary
          personaName={"FriendsProfile"}
          imageURL={"friend.avatarImage"}
          children={undefined}
        />
      </div>
      <hr className="py-4 " />
      <div className="flex-grow border-t-2 border-black py-4" />
      {/* Games Library Component
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
