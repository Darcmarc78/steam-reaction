import React from "react"

export const RecentLibrary = (recentlyPlayedLibraryProp: Array<Object>) => {
  // console.log(recentlyPlayedLibrary.gamesArray[0])
  const recentLibrary = recentlyPlayedLibraryProp.gamesArray
  console.log("recentLibrary")
  console.log(recentLibrary)
  // const recentLibrary: Array<Object> = Array.from(arrayProp.gamesArray)
  /* recentLibrary.forEach((x) => {
    console.log(x)
  }) */
  return (
    <div>
    <ul className="">
        {/* for each item in api resopnse game array */}
        {/* {console.log(gamesArray[0].name)} */}
        {recentLibrary.forEach(x => {
          <li>{x.name} </li>
        })}
        {/* Display Game Hero Image component */}
        {/* <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div>
        <div className="flex flex-1 justify-center py-4 text-3xl">Game</div> */}
      </ul>
    </div>
  )
}

export default RecentLibrary
