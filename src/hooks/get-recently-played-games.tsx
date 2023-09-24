import axios from "axios"

function getRecentlyPlayedGames(id: string) {
  return axios
    .get("http://localhost:3000/steam-api/get-recently-played-games", {
      params: {
        steamIDParam: id,
      },
    })
    .then((res: Object) => {
      return res.data.response.games
    })
    .catch((error: String) => {
      // handle error
      console.log("Error: " + error)
    })
}

export default getRecentlyPlayedGames
