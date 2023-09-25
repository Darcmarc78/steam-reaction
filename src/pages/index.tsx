import * as React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import ProfilePage from "./steam/profile"
import { UserSummaryContext } from "../hooks/UserSummaryContext"

const HomePage = () => {
  const [propState, setPropState] = React.useState(false)
  const [userSummary, setUserSummary] = React.useState({})
  return (
    <UserSummaryContext.Provider userObject={""}>
      <Layout pageTitle="Steam Reaction">
        <p className="text-center">
          Do you ever have trouble finding searching through your huge Steam
          library for games you and your friends own?
        </p>
        <p className="text-center">
          Just enter your Steam Id in the search bar above, and choose a friend!
        </p>
        {propState ? (
          <ProfilePage
            userSummary={userSummary}
            setUserSummary={setUserSummary}
          />
        ) : (
          <p>No user yet</p>
        )}
      </Layout>
    </UserSummaryContext.Provider>
  )
}

export const Head = () => (
  <SEO title={""} description={""} pathname={""} children={undefined} />
)

export default HomePage
