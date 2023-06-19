const axios = require("axios")

// forward request to local express server.
export const getSteamUser = (steamId: String): JSON => {
  axios.get("http://localhost:3000/forward-to-steam-api", {
      params: {
        steamIDParam: steamId,
      },
    })
    .then((res: JSON) => {
      // handle success
      return res.data.response.players[0]
    })
    .catch((error: String) => {
      // handle error
      console.log(error)
      return
    })
    // return empty object or empty interface?
}

export default getSteamUser
