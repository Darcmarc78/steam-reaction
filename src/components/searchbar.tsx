import * as React from "react"
import getPlayerSummary from "../hooks/get-player-summary"

const Searchbar = () => {
  const [searchedSteamId, setSearchedSteamId] = React.useState("")
  const handleSubmit = (event: any) => {
    // Prevent the browser from reloading the page
    event.preventDefault()
    // Make call to get Player summary and Recently played games
    getPlayerSummary(searchedSteamId)
      .then((res: Object) => {})
      .catch((err: any) => console.log("ERROR: " + err))
    // Link to ProfilePage with player summary and recently played games
  }
  return (
    <div className="flex flex-row items-center align-middle">
      <form onSubmit={handleSubmit} className="flex flex-row items-center">
        <input
          className="h-4/6 w-auto rounded-md border-slate-300 bg-black text-white placeholder-white"
          type="text"
          placeholder="Enter Steam Id"
          value={searchedSteamId}
          onChange={(e) => setSearchedSteamId(e.target.value)}
        />
        <button
          type="submit"
          className="h-4/6 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Searchbar
