import * as React from 'react'
import { Link } from 'gatsby'
type LayoutProps = {
  pageTitle: string,
  children: React.ReactNode 
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      {/* @darcmarc78 - Should include custom Navbar here eventually */}
      {/* TODO - Extract "nav" into separate component */}
      <nav className="">
        <div className="mx-auto max-w-2xl border border-red-300">
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
      <main className="self-center">
        <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
