import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <div className="mx-auto max-w-2xl border-4 border-black">
          <ul className="">
            <li className="">
              {/* logo redirect to home */}
              <Link to="/" className="">
                Steam Reaction
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
    </div>
  )
}

export default Navbar
