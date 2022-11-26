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
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout