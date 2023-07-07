var express = require('express');
var router = express.Router();
const axios = require('axios')
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// Set process env vars
require('dotenv').config()

/* GET users listing. */
router.get('/', cors(corsOptions) , async function (req, res) {
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
      res.send(response.data)
    })
    .catch((error) => {
      // handle error
      console.log(error)
      return
    });
});

module.exports = router;
