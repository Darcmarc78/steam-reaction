import React from "react"
import { SEO } from "../components/seo"
import axios from "axios"
import Layout from "../components/layout"
import PlayerSummary from "../components/playersummary"
import getFriendsSummaries from "../hooks/get-all-friends-summaries"

const pageTitle: string = "Friend's List"

const FriendsListPage = (paramObject: Object) => {
  const [friendsSummary, setFriendsSummary] = React.useState([])
  let resultArray: Object[] = []
  let steamId = paramObject.location.state.yourSteamId
  // Call get-friends-list with user supplied steamId
  React.useEffect(() => {
    Promise.all([getFriendsSummaries(steamId)])
      .then((res: any) => {
        setFriendsSummary(res[0])
      })
      .catch((error: string) => {
        console.log("Error: " + error)
      })
  }, [])

  return (
    <Layout pageTitle={pageTitle}>
      {friendsSummary ? (
        friendsSummary.map((friend: Object) => (
          <div className=" flex flex-row py-1">
            <PlayerSummary
              personaName={friend.personaName}
              imageURL={friend.avatarImage}
              children={undefined}
            />
          </div>
        ))
      ) : (
        <p>No Result</p>
      )}
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
