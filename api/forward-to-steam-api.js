var express = require('express');
var router = express.Router();
const axios = require('axios')

// Set process env vars
require('dotenv').config()

/* GET users listing. */
router.get('/', async function (req, res) {
  // Get steamids object from url Param
  let steamID = req.query.steamIDParam
  let getPlayerSummaryWithAPIKey =
  process.env.STEAM_GET_PLAYER_SUMMARIES
    + process.env.STEAM_API_KEY // Get API Key from env
    + '&steamids='
    +  steamID
    + '&format=json'

  axios.get(getPlayerSummaryWithAPIKey)
    .then((response) => {
      // handle success
      console.log("Hit Third Party API successfully")
      res.send('Here is response data' + response.data )
    })
    .catch((error) => {
      // handle error
      console.log(error)
      return
    });
});

module.exports = router;
