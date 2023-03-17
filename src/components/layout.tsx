import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Searchbar from "./searchbar"

type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <div className="container mx-auto flex basis-full justify-center">
        <Navbar />
        <Searchbar />
      </div>
      <main>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
