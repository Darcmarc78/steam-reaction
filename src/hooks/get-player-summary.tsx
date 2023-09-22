import axios from "axios"

function getPlayerSummary(id: String) {
  return axios
    .get("http://localhost:3000/steam-api/get-player-summary", {
      params: {
        steamIDParam: id,
      },
    })
    .then((res: any) => {
      // handle success
      return res.data.response.players[0]
    })
    .catch((error: String) => {
      // handle error
      console.log("Error: " + error)
    })
}

export default getPlayerSummary
