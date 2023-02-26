import * as React from "react"

const Navbar = () => {
  return (
    {/* TODO - Extract "nav" into separate component */}
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
  )
}

export default Navbar


