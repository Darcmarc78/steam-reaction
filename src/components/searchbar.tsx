import * as React from "react"

// Handle formAction
// Link to ProfilePage with entered steam id as param

const Searchbar = () => {
  return (
    <div className="flex flex-row align-middle">
      <div>
        <input
          className="h-4/6 w-auto rounded-md border-slate-300 bg-black placeholder-white"
          type="text"
          placeholder="Enter Steam Id"
          formAction="POST"
        />
      </div>
      <div>
        <button
          className="h-4/6 justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      
    </div>
  )
}

export default Searchbar
