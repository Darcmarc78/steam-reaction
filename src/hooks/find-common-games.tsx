import axios from "axios"
import getOwnedGames from "./get-owned-games"
import isEmpty from "./check-empty-object"

function findCommonGames(userSteamId: String, friendSteamId: String) {
  let userOwnedGames: Object[] = []
  let friendOwnedGames: Object[] = []
  let commonGames: Array<Object> = []

  return Promise.all([getOwnedGames(userSteamId), getOwnedGames(friendSteamId)])
    .then((res: any) => {
      if (isEmpty(res[0]) || isEmpty(res[1])) return []
      return res
    })
    .then((res: any) => {
      if (isEmpty(res)) return []
    })
    .catch((err: any) => {
      console.log(err)
      return
    })
}

export default findCommonGames
