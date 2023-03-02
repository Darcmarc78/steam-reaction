import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex justify-center flex-col">
          <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
