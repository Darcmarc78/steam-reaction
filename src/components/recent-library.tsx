import React from "react"
import HeroCapsule from "../components/hero-capsule"

type RecentLibraryProps = {
  recentlyPlayedLibrary: Array<Object>
  children: React.ReactNode
}

export const RecentLibrary = ({
  recentlyPlayedLibrary,
  children,
}: RecentLibraryProps) => {
  const steamContentServer =
    "https://cdn.cloudflare.steamstatic.com/steam/apps/"
  return (
    <div>
      <h1 className="pb-8 text-2xl font-bold underline">Recently Played</h1>
      <div className="grid grid-cols-5 flex-row items-center gap-4">
        {recentlyPlayedLibrary.map((game: Object) => (
          <HeroCapsule
            name={game.name}
            appID={game.appid}
            libraryCapsuleURL={steamContentServer}
            children={undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default RecentLibrary
