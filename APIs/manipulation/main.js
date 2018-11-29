let div = document.querySelector("div");

function changeSize() {
	let	HEIGHT = window.innerHeight;
	let	WIDTH = window.innerWidth;

	div.style.height = `${HEIGHT}px`;
	div.style.width = `${WIDTH}px`;
}
changeSize();
window.onresize = changeSize;