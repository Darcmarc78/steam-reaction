import React from "react"
import { SEO } from "../../components/seo"
import axios from "axios"
import Layout from "../../components/layout"
import PlayerSummary from "../../components/playersummary"
import getFriendsSummaries from "../../hooks/get-all-friends-summaries"
import { Link } from "gatsby"

const pageTitle: string = "Friend's List"

const FriendsListPage = (paramObject: Object) => {
  const [friendsSummary, setFriendsSummary] = React.useState<Array<Object>>([])
  let resultArray: Object[] = []
  let steamId = paramObject.location.state.yourSteamId
  React.useEffect(() => {
    getFriendsSummaries(steamId)
      .then((friendsSummaries: Array<Object>) => {
        setFriendsSummary(friendsSummaries)
      })
      .catch((error: string) => {
        console.log("Error: " + error)
      })
  }, [])

  return (
    <Layout pageTitle={pageTitle}>
      {friendsSummary.length > 0 ? (
        friendsSummary.map((friend: Object) => (
          <div className=" flex flex-row py-1">
            <div className=" basis-3/4">
              <PlayerSummary
                personaName={friend.personaName}
                imageURL={friend.avatarImage}
                children={undefined}
              />
            </div>
            <div className="flex basis-1/4 items-center justify-center">
              <Link
                className="flex grow justify-center rounded-full bg-sky-600 text-white"
                to="/steam/compare-games"
                state={{ obj: String }}
              >
                <p>Compare Games</p>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading</p>
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
