import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  heading,
  navLinkItem,
  navLinkText
} from '../styles/layout.module.css'

type LayoutProps = {
  pageTitle: string,
  children: React.ReactNode 
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={container}>
      {/* @darcmarc78 - Should include custom Navbar here eventually */}
      {/* TODO - Extract "nav" into separate component */}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/library" className={navLinkText}>
              Library
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/discussion" className={navLinkText}>
              Discussion
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout