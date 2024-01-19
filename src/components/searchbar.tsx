import * as React from "react"
import getPlayerSummary from "../hooks/get-player-summary"
import { navigate } from "@reach/router"
import getRecentlyPlayedGames from "../hooks/get-recently-played-games"

const Searchbar = () => {
  const [userSteamId, setUserSteamId] = React.useState("")
  const handleSubmit = (event: any) => {
    // Prevent the browser from reloading the page
    event.preventDefault()
    if (userSteamId != "" && typeof userSteamId === "string") {
      Promise.all([getRecentlyPlayedGames(userSteamId), getPlayerSummary(userSteamId)])
        .then((res: any) => {
          navigate("/steam/profile/", { state: { res } })
        })
        .catch((err: string) => {
          console.log(err)
        })
    }
    else{
      alert("Invalid Steam User ID")
    }
  }
  return (
    <div className="flex flex-row items-center align-middle">
      <form onSubmit={handleSubmit} className="flex flex-row items-center">
        <input
          className="h-4/6 w-auto rounded-md border-slate-300 bg-black text-white placeholder-white"
          type="text"
          placeholder="Enter Steam Id"
          value={userSteamId}
          onChange={(e) => setUserSteamId(e.target.value)}
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
