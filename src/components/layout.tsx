import * as React from "react"
import Navbar from "./navbar"
import Searchbar from "./searchbar"

type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const [propState, setPropState] = React.useState(false)
  const [userSummary, setUserSummary] = React.useState({})
  // if userSummary is populated, route to Profile Page
  return (
    <div>
      <div className="container mx-auto flex basis-full items-center justify-center pb-4">
        <Navbar />
        <Searchbar userSummary={userSummary} setUserSummary={setUserSummary} />
      </div>
      <main>
        <div className="container mx-auto flex flex-col justify-center">
          <h1 className="pb-8 text-2xl font-bold underline">{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
