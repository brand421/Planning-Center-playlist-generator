const express = require("express");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

const app = express();

const url = "https://api.planningcenteronline.com/api/v2/personal_access_tokens";

app.get("/", function(req, res) {
    
})