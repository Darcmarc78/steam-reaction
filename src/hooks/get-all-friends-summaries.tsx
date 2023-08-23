import axios from "axios"

function getFriendsSummaries(id: string) {
  const resultArray: Object[] = []
  let summaryObject = {}
  let friendId = ""
  axios
    .get("http://localhost:3000/steam-api/get-friends-list", {
      params: {
        steamIDParam: id,
      },
    })
    .then((res: any) => {
      let friendsArray: Array<Object> = res.data.friendslist.friends
      friendsArray.forEach(async (friend: Object) => {
        return axios
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
            resultArray.push(summaryObject)
          })
      })
    })
    .catch((error: String) => {
      // handle error
      console.log("Error: " + error)
    })
  return resultArray
}

export default getFriendsSummaries
