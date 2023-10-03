import axios from "axios"

function getFriendsSummaries(id: string) {
  let promiseArray: any[] = []
  let summaryObject = {}
  return axios
    .get("http://localhost:3000/steam-api/get-friends-list", {
      params: {
        steamIDParam: id,
      },
    })
    .then((res: any) => {
      let friendsArray: Array<Object> = res.data.friendslist.friends
      friendsArray.forEach((friend: Object) => {
        let summaryRequest = axios
          .get("http://localhost:3000/steam-api/get-player-summary", {
            params: {
              steamIDParam: friend.steamid,
            },
          })
          .then((res: Object) => {
            summaryObject = {
              friendId: res.data.response.players[0].steamid,
              personaName: res.data.response.players[0].personaname,
              avatarImage: res.data.response.players[0].avatarfull,
            }
            return summaryObject
          })
        promiseArray.push(summaryRequest)
      })
      return Promise.all(promiseArray)
    })
    .then((friendsSummaries: any) => {
      return friendsSummaries
    })
    .catch((error: String) => {
      // handle error
      console.log("Error: " + error)
    })
}

export default getFriendsSummaries
