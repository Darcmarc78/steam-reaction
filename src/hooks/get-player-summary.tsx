import axios from "axios"

function getPlayerSummary(id: string) {
  return axios
    .get("http://localhost:3000/steam-api/get-player-summary", {
      params: {
        steamIDParam: id,
      },
    })
    .then((res: Object) => {
      return res.data.response.players[0]
    })
    .catch((error: String) => {
      // handle error
      console.log("Error: " + error)
    })
}

export default getPlayerSummary
