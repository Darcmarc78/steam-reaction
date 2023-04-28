const http = require("http");
// Get User Id parameter passed from "Searchbar"
http.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + STEAM_API_KEY)
// Call GetPlayerSummaries Steam API Method using .env variable and User_id parameter
// Return results as JSON

// Parse returned JSON object into avatar and personaname

// Display avatar and personaname