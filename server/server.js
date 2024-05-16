require("dotenv").config();

// MARK: - Imports --------------------------------------------------------------------------

const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const https = require('https');

// MARK: - Constants --------------------------------------------------------------------------

const isProduction = process.env.ENVIRONMENT == "prod";
const devPort = process.env.DEV_PORT || 8001;

// MARK: - Init App --------------------------------------------------------------------------

const app = express();

const httpApp = express()

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// MARK: - Configuring Routes --------------------------------------------------------------------------

app.get("/", (request, response) => {
    console.log("fuck that")
});
app.use("/api/test", (request, response) => {
    response.json({
        message: "fuck"
    });
});

// MARK: - Starting Server --------------------------------------------------------------------------

http.createServer(isProduction ? httpApp : app).listen(devPort, "0.0.0.0", function() {
    console.log(`Express HTTPS server listening on port ${devPort}` );
});
