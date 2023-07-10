import React from "react"

type RecentLibraryPage = {}

export const RecentLibrary = () => {
  return (
    <div>
      <div className="grid grid-cols-5 flex-row items-center gap-4">
        {/* for each item in api resopnse game array */}
        {/* Display Game Hero Image component */}
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>

      </div>
    </div>
  )
}

export default RecentLibrary
