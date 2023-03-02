import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="">
      <nav className="container mx-auto border-4 border-black">
        <ul className="flex flex-row">
          <li className="">
            <Link to="/" className=" text-3xl">
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
      </nav>
    </div>
  )
}

export default Navbar
