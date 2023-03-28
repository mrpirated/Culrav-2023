require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const http = require("http");
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;
app.use(express.static(path.join(__dirname, "build")));



app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
const server = http.createServer(app);
server.listen(PORT, HOST_NAME, (req, res) => {
	console.log(`Frontend is Running at http://${HOST_NAME}:${PORT}:`);
});
