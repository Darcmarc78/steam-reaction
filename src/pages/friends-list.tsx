import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import axios from "axios"

const pageTitle = "Friend's List"

const FriendsListPage = () => {
  const [friendsList, setFriendsList] = React.useState([])
  // Call get-friends-list with user supplied steamId
  React.useEffect(() => {
    axios.get("http://localhost:3000/steam-api/get-friends-list",
    {
      params: {
        steamIDParam: steamId,
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
    <div>
      <Layout pageTitle={pageTitle}>
      {friendsList.map((game: Object) => (
        console.log("friends")
        ))}
      </Layout>
    </div>
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
