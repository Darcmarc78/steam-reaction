import axios from "axios"

async function getFriendsSummaries(id: string) {
  let resultArray: never[] = []
  axios
    .get("http://localhost:3000/steam-api/get-friends-list", {
      params: {
        steamIDParam: id,
      },
    })
    .then((res: any) => {
      let friendsArray: Array<Object> = res.data.friendslist.friends
      friendsArray.forEach((friend: Object) => {
        axios
          .get("http://localhost:3000/steam-api/get-player-summary", {
            params: {
              steamIDParam: friend.steamid,
            },
          })
          .then((res: Object) => {
            resultArray.push(res.data.response.players[0])
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
