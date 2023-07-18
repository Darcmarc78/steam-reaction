import React from "react"

type RecentLibraryProps = {
  recentlyPlayedLibrary: Array<Object>
  children: React.ReactNode
}

export const RecentLibrary = ({
  recentlyPlayedLibrary,
  children,
}: RecentLibraryProps) => {
  
  for (var i = 0; i < recentlyPlayedLibrary.length; i++) {
    console.log(recentlyPlayedLibrary[i].name)
  }
  return (
    <div>
      <div className="grid grid-cols-5 flex-row items-center gap-4">
        {/* for each item in api resopnse game array */}
        {/* {console.log(gamesArray[0].name)} */}
        {/* Display Game Hero Image component */}
        {/* <div className="flex flex-1 justify-center py-4 text-3xl">{recentLibrary[0].name}</div> */}
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
