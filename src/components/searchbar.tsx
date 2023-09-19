import * as React from "react"

// Handle formAction
// Link to ProfilePage with entered steam id as param
function handleSubmit() {}

const Searchbar = () => {
  const [userSteamId, setUserSteamId] = React.useState("")
  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault()
  }
  return (
    <div className="flex flex-row items-center align-middle">
      <form className="flex flex-row items-center">
        <input
          className="h-4/6 w-auto rounded-md border-slate-300 bg-black text-white placeholder-white"
          type="text"
          placeholder="Enter Steam Id"
          onSubmit={handleSubmit}
        />
        <button className="h-4/6 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  )
}

export default Searchbar
