import React from "react"
import { SEO } from "../components/seo"
import axios from "axios"
import Layout from "../components/layout"
import PlayerSummary from "../components/playersummary"

const pageTitle: string = "Friend's List"

const FriendsListPage = (paramObject: Object) => {
  const [friendsSummary, setFriendsSummary] = React.useState([])

  // Get SteamId from path param or search param
  // Call get-friends-list with user supplied steamId
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/steam-api/get-friends-list", {
        params: {
          steamIDParam: paramObject.location.state.yourSteamId,
        },
      })
      .then((res: any) => {
        let friendsArray: Array<Object> = res.data.friendslist.friends
        friendsArray.forEach((friend: Object) => {
          axios
            .get("http://localhost:3000/steam-api/get-player-summary", {
              params: {
                steamIDParam: friend.steamid,
              },
            })
            .then((res: Object) => {
              friendsSummary.push(res.data.response.players[0])
            })
        })
      })
      .catch((error: String) => {
        // handle error
        console.log("Error: " + error)
      })
  }, [])
  return (
    <Layout pageTitle={pageTitle}>
      <div className=" flex flex-row">
        {friendsSummary.map((friend: Object) => (
          <PlayerSummary
            personaName={friend.personaname}
            imageURL={friend.avatarfull}
            children={undefined}
          />
        ))}
      </div>
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
