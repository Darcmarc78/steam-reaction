const axios = require('axios')

// Get User Id parameter passed from "Searchbar" as JSON
export const getSteamUser = (steamId: String) => {
    
        // Call GetPlayerSummaries Steam API Method using .env variable and User_id parameter
    axios.get("http://localhost:3000/forward-to-steam-api", {
        params: {
            steamIDParam: steamId
        }
    })
    .then((response:JSON) => {
        // handle success
        return response
    })
    .catch((error:String) => {
        // handle error
        console.log(error)
    });
}

export default getSteamUser