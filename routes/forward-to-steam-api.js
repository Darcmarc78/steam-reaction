var express = require('express');
var router = express.Router();
const axios = require('axios')

// Set process env vars
require('dotenv').config()

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // Get API Key from env
  // Get steamids object from argument
  let getPlayerSummaryWithAPIKey =
    process.env.STEAM_GET_PLAYER_SUMMARIES
    + process.env.STEAM_API_KEY
    + '&steamids='
    +  // Robin walker's Steam
    + '&format=json'

  console.log(getPlayerSummaryWithAPIKey)
  /* await axios.get("")
    .then((response) => {
      // handle success
      console.log("Hit Third Party API successfully")
      // console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      // handle error
      console.log(error)
    }); */
  res.send('respond with a resource');
});

module.exports = router;
