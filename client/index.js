function listPlayers() {
	sendCommand("list");
}

function sendCommand(command) {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			console.log(xhr.responseText);
		}
	};
	xhr.open("POST", "/command");
	xhr.send(JSON.stringify({
		command: command
	}));
}