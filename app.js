require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const querystring = require("querystring");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const url = "https://api.planningcenteronline.com/api/v2/personal_access_tokens";

const api = require(__dirname + "/apiTokens.js");
const redirectUri = "http://localhost:3000/planningcenterlogin";

var stateKey = 'spotify_auth_state';

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/Spotifylogin", function(req, res) {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_ID,
      scope: scope,
      redirect_uri: redirectUri,
      state: state
    }));
    console.error;
})

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
})