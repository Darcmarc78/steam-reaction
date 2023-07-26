import React from "react"
import { SEO } from "../components/seo"
import axios from "axios"
import Layout from "../components/layout"

const pageTitle = "Friend's List"


const FriendsListPage = () => {
  const [friendsList, setFriendsList] = React.useState([])
  // Get SteamId from path param or search param
  // Call get-friends-list with user supplied steamId
  React.useEffect(() => {
    axios.get("http://localhost:3000/steam-api/get-friends-list",
    {
      params: {
        steamIDParam: yourSteamId,
      },
    }
    )
      .then((res: any) => {
        console.log("friends List:")
        console.log(res)
      })
      .catch((error: String) => {
        // handle error
        console.log("Error: " + error)
      })
  }, [])
  return (
    <Layout pageTitle={pageTitle}>
      <p>TEST</p>
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
