import React from "react"
import { getSteamUser } from "../../api/get-steam-user"
import { Link } from "gatsby"

type PlayerSummaryProps = {
  steamId : String
  personaName: String
  playerSummary: Object
  children: React.ReactNode
}


export const PlayerSummary = ({steamId, playerSummary, personaName, children}:PlayerSummaryProps) => {
  // Call get-steam-user with user supplied steamId
  const test = getSteamUser(steamId, playerSummary)
  console.log("Player Summary: ")
  console.log(test)
  return (
    <div>
      <div className="flex flex-row items-center">
        <h1 className="flex flex-1 justify-center text-2xl">STEAM PROFILE FROM OBJECT{personaName}</h1>
      </div>

      {/* Steam Library Component:
            Horizontal Rule at top
            Width: Viewport span
            < Individual Steam Game> Component
            */}
      <hr className="py-4" />
      <p className="flex flex-1 justify-center py-4 text-3xl">
        [STEAM LIBRARY COMPONENT]
      </p>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
      {children}
    </div>
  )
}

export default PlayerSummary;