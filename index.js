function addNote(){
	let div = document.createElement("div");
	div.setAttribute("class", "note");
	let textarea = document.createElement("textarea")
	textarea.addEventListener("click", event => {event.stopPropagation()});
	textarea.style.background = colorGenerator();

	div.appendChild(textarea);
	
	let closeButton = document.createElement("i");
	closeButton.setAttribute("class","fas fa-times")
	closeButton.addEventListener("click", event => {deleteNote(event)});


	div.appendChild(closeButton);
	div.addEventListener("click", event => {deleteNote(event)});

	document.getElementById("container").appendChild(div);
}

function deleteNote(event) {
	event.stopPropagation();
	event.target.parentNode.remove();
}

function colorGenerator() {
	let colorString = "0123456789ABCDEF";
	let color ="#";
	for(let i = 0; i < 6; i++) {
		color += colorString[Math.round(Math.random()*15)];
	}
	return color;
}