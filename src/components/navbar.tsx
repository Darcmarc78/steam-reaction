import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="">
      <nav className="container mx-auto ">
        <ul className="flex flex-row">
          <li className="items-center">
            <Link to="/" className=" px-8 text-3xl ">
              Steam Reaction
            </Link>
          </li>
          <div className="flex flex-row items-center">
            <li className="px-4">
              <Link to="/about" className="">
                About
              </Link>
            </li>
            <li className="px-4">
              <Link to="/library" className="">
                Library
              </Link>
            </li>
            <li className="px-4">
              <Link to="/discussion" className="">
                Discussion
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
