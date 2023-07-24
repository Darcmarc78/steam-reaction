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
      <div className="container mx-auto flex basis-full justify-center pb-4">
        <Navbar />
        <Searchbar />
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
