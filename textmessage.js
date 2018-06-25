

function looper(message)
{

	var message_to_insert;
	var container_block ;
 
	message_to_insert = document.createElement('div');
	message_to_insert.classList.add("clear");
	message_to_insert.classList.add("from-them");

	message_to_insert.innerHTML = message;

	container_block = document.getElementById('container');
	container_block.appendChild(message_to_insert);
}

var sendButton = document.getElementById('sendButton');
var fromThemMessages = ["Hello?","?", "K."];

for (let i = 0; i < fromThemMessages.length; i++) {
	var num = Math.floor(Math.random() * 11);
	var numInterval = num * 1000;
	setInterval(function(){
		looper(fromThemMessages[i]);
		}, numInterval);
}

sendButton.addEventListener("click", function(){
	var input = document.getElementById('message').value

	var message_to_insert;
	var container_block ;
	 
	message_to_insert = document.createElement('div');
	message_to_insert.classList.add("clear");
	message_to_insert.classList.add("from-me");

	message_to_insert.innerHTML = input;

	container_block = document.getElementById('container');
	container_block.appendChild( message_to_insert );
});