"use strict"
let smallImages = document.querySelector('.smallImages');
let bigImg = document.querySelector('.bigImg');

function searchNumImg(name) {
	let indexNumber = name.indexOf('-small');
	let arr = name.split("-small");
	let newWord = arr[0].concat("", arr[1]);
	return newWord;
}
smallImages.addEventListener("click", e =>{
	e.preventDefault();
	let el = e.target;
	if (el.hasAttribute('src')) {
		let imgName = el.getAttribute('src');
		let newImg = searchNumImg(imgName);
		bigImg.setAttribute("src", newImg);
	}
	console.log();
});

