let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let newItem = document.getElementById('newItem');

function createNewEl(text){
	let li = document.createElement("li");
	let liText = document.createTextNode(text);
	li.appendChild(liText);
	ul.appendChild(li);
}
btn.addEventListener("click", function(){
	createNewEl(newItem.value);
});