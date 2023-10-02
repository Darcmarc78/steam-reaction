import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="">
      <nav className="">
        <ul className="flex flex-row">
          <li className="">
            <Link to="/" className=" px-48 text-3xl ">
              Steam Reaction
            </Link>
          </li>
          <div className="flex flex-row items-center">
            <li className="px-4">
              <Link to="/your-library" className="">
                Your Library
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
