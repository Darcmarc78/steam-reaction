import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="">
      <nav className="">
        <ul className="flex flex-row">
          <li className="">
            <Link to="/" className=" px-64 text-3xl ">
              Steam Reaction
            </Link>
          </li>
          <div className="flex flex-row items-center">
            {/* <li className="px-4">
              <Link to="/about" className="">
                About
              </Link>
            </li> */}
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
            {/* Most likely custom login component*/}
            {/* Place holder steam profile link */}
            <li className="px-4">
              <Link to="/steam/profile" className="">
                Steam Profile
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
