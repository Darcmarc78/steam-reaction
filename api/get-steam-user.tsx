const axios = require('axios')

// Get User Id parameter passed from "Searchbar" as JSON
export const getSteamUser = (steamId: String) => {
    let getPlayerSummary: String = 
        process.env.GATSBY_URL_GET_PLAYER_SUMMARIES
        + process.env.STEAM_API_KEY 
        + '&steamids=' 
        + steamId 
        + '&format=json'
    
        // Call GetPlayerSummaries Steam API Method using .env variable and User_id parameter
    axios.get(getPlayerSummary)
    .then((response:JSON) => {
        // handle success
        console.log(response)
        return response
    })
    .catch((error:String) => {
        // handle error
        console.log(error)
    });
}

export default getSteamUser