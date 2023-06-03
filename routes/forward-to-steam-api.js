var express = require('express');
var router = express.Router();

let getPlayerSummary = 
        process.env.GATSBY_URL_GET_PLAYER_SUMMARIES
        + process.env.STEAM_API_KEY 
        + '&steamids=' 
        +  // Robin walker's Steam
        + '&format=json'
    

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Hitting get Users route')
  axios.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=KEY HERE&steamids=&format=json")
    .then((response) => {
        // handle success
        console.log("Hit backend api")
        return response
    })
    .catch((error) => {
        // handle error
        console.log(error)
    });
  res.send('respond with a resource');
});

module.exports = router;
