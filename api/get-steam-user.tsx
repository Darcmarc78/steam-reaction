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
      // Set "Player" state? with data from response?
      return res.data.response.players[0] // why is this not returning to profile.tsx?
    })
    .catch((error: String) => {
      // handle error
      console.log(error)
      return
    })
    // return empty object or empty interface?
}

export default getSteamUser
