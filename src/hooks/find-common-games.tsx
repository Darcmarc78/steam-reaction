import axios from "axios"
import getOwnedGames from "./get-owned-games"
import isEmpty from "./check-empty-object"

function findCommonGames(userSteamId: String, friendSteamId: String) {
  let userOwnedGames: Object[] = []
  let friendOwnedGames: Object[] = []
  let commonGames: Map<String, String> = new Map()

  return Promise.all([getOwnedGames(userSteamId), getOwnedGames(friendSteamId)])
    .then((res: any) => {
      if (isEmpty(res[0]) || isEmpty(res[1])) return []
      if (res[0].length > res[1].length) {
        // make a map with larger array's appid as key
        let userGameMap = new Map(res[0].map((game) => [game.appid, game.name]))
       // filter userGames array for games with appid in "userGameMap"
        let commonGames = res[1].filter((friendGame) =>
          userGameMap.has(friendGame.appid)
        )
        return commonGames
      } else {
        // make a map with larger array's appid as key
        let friendGameMap = new Map(res[1].map((game) => [game.appid, game.name]))
        // filter userGames array for games with appid in "friendGameMap"
        let commonGames = res[0].filter((friendGame) =>
          userGameMap.has(friendGame.appid)
        )
        return commonGames
      }
    })
    .catch((err: any) => {
      console.log(err)
      return
    })
}

export default findCommonGames
