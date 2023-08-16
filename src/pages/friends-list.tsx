import React from "react"
import { SEO } from "../components/seo"
import axios from "axios"
import Layout from "../components/layout"
import PlayerSummary from "../components/playersummary"
import getFriendsSummaries from "../hooks/get-all-friends-summaries"

const pageTitle: string = "Friend's List"

const FriendsListPage = (paramObject: Object) => {
  const [friendsSummary, setFriendsSummary] = React.useState([])
  let resultArray: any[] = []
  let steamId = paramObject.location.state.yourSteamId
  // Call get-friends-list with user supplied steamId
  // setFriendsSummary(getFriendsSummaries(steamId))
  React.useEffect(() => {}, [])

  return (
    <Layout pageTitle={pageTitle}>
      {resultArray.map((friend: Object) => (
        <div className=" flex flex-row py-1">
          <PlayerSummary
            personaName={friend.personaname}
            imageURL={friend.avatarfull}
            children={undefined}
          />
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title={pageTitle}
    description={"Find thread about your favorite games here!"}
    pathname={""}
    children={undefined}
  />
)

export default FriendsListPage
