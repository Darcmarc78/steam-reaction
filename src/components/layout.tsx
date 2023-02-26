import * as React from "react"
import { Link } from "gatsby"
type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      {/* @darcmarc78 - Should include custom Navbar here eventually */}
      {/* TODO - Extract "nav" into separate component */}
      <nav
      <nav className="">
        <div className="mx-auto max-w-2xl border-4 border-black">
          <ul className="">
            <li className="">
              {/* logo redirect to home */}
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="">
              <Link to="/about" className="">
                About
              </Link>
            </li>
            <li className="">
              <Link to="/library" className="">
                Library
              </Link>
            </li>
            <li className="">
              <Link to="/discussion" className="">
                Discussion
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
