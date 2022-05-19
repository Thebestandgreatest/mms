const express = require("express");
const app = express();
const download = require("download");

const RCON = require("./RCON/RCON");
const rcon = new RCON();

const port = 3000;
const homedir = require("os").homedir();

app.use(express.static("client"));
app.use(express.static("node_modules/jquery/dist/"));

app.get("/", (req,res) => {
	res.sendFile(`${__dirname}/client/index.html`);
});

app.post("/command", (req,res) => {
	let command = req.body;

	console.log(command);
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

// noinspection SpellCheckingInspection
rcon.connect("localhost", 25575, "superawesomepassword").then(() => {
	console.log("authenticated");
	runCommand("list");
});

function runCommand(command) {
	rcon.send(command).then(response => {
		console.log(`${response}`);
	}).catch(error => {
		console.error(`Error: ${error}`);
	});
}

function downloadServerJar(url, filePath) {
	//const filePath = `${homedir}/Documents`;
	download(url, filePath).then(() => {
		console.log("done");
	});
}