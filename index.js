const express = require("express");
const app = express();
const download = require("download");

const port = 3000;
const homedir = require("os").homedir();

app.get("/", (req,res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

function downloadServerJar(url, filePath) {
	//const filePath = `${homedir}/Documents`;
	download(url, filePath).then(() => {
		console.log("done");
	});
}