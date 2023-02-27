import express from "express";
import cors from "cors";
import http from "http";
import dbg from "debug";
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;
const debug = dbg("http");
const { json } = express;
const app = express();
app.use(express.json());

app.use(cors());

app.use(json({ extended: false }));
app.use("/", (req, res) => {
	res.send("Server is Running");
});
const server = http.createServer(app);
server.listen(PORT, HOST_NAME, () => {
	debug(`✨✨ Server running at http://${HOST_NAME}:${PORT}:`);
});
