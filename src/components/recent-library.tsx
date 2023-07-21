import React from "react"

type RecentLibraryProps = {
  recentlyPlayedLibrary: Array<Object>
  children: React.ReactNode
}

export const RecentLibrary = ({
  recentlyPlayedLibrary,
  children,
}: RecentLibraryProps) => {
  return (
    <div>
      <div className="grid grid-cols-5 flex-row items-center gap-4">
        {/* for each item in api resopnse game array */}
        {/* Display Game Hero Image component */}
        {/* <div className="flex flex-1 justify-center py-4 text-3xl">{recentLibrary[0].name}</div> */}
          {recentlyPlayedLibrary.map((game: Object) => (
            <div className="flex flex-1 justify-center py-4 text-3xl" >{game.name}</div>
          ))}
      </div>
    </div>
  )
}

export default RecentLibrary
