const axios = require('axios')

// Get User Id parameter passed from "Searchbar"
export const getSteamUser = () => {
    axios.get(
    'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A637C2E3E241F1A208A36786121B6157&steamid=76561198161853165&format=json'
    )
    .then(function (response:JSON) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}
// Call GetPlayerSummaries Steam API Method using .env variable and User_id parameter

// Return results as JSON

// Parse returned JSON object into avatar and personaname

// Display avatar and personaname