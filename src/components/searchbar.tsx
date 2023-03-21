import * as React from "react"

const Searchbar = () => {
  return (
    <input
      className="h-full w-auto self-center rounded-md border-slate-300 bg-black placeholder-white"
      type="text"
      placeholder="Enter Steam username or game name"
      formAction="POST"
    />
  )
}

export default Searchbar
