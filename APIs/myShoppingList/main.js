let ul = document.querySelector("ul");
let btn = document.querySelector(".add");
let newItem = document.getElementById('newItem');

function createNewEl(text){
	let li = document.createElement("li");
	let liText = document.createTextNode(text);
	let delBtn = document.createElement("button");
	delBtn.textContent = "DELETE"
	delBtn.className = "delBtn";
	li.appendChild(liText);
	li.appendChild(delBtn);
	ul.appendChild(li);
}
btn.addEventListener("click", function(){
	createNewEl(newItem.value);
	newItem.value = "";
});
ul.addEventListener("click", function(e){
	let removeLi = e.target.parentElement;
	let container = removeLi.parentNode;
	container.removeChild(removeLi);
});
