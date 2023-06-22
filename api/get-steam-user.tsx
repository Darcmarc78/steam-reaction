const axios = require("axios")

// forward request to local express server.
export const getSteamUser = async (steamId: String) : Promise<String>=> {
  // Set state from parent component, display
  let returnString = ''
  await axios.get("http://localhost:3000/forward-to-steam-api", {
      params: {
        steamIDParam: steamId,
      },
    })
    .then((res: JSON) => {
      // handle success
      returnString = JSON.stringify(res.data.response.players[0])
    })
    .catch((error: String) => {
      // handle error
      returnString = 'Error'
    })
    return returnString
}

