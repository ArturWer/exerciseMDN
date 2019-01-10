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

	function showNewImg(){
		console.warn("Need newImg");
		let opacity = Number(bigImg.style.opacity);
		let intID = setInterval(()=>{
			opacity += 0.1;
			bigImg.style.opacity = opacity;
			console.log(opacity);
			if (bigImg.style.opacity >= 1) {
				clearInterval(intID);
			}
		}, 100);
	};

	if (el.hasAttribute('src')) {
		let imgName = el.getAttribute('src');
		let newImg = searchNumImg(imgName);
		if (newImg !== bigImg.getAttribute('src')) {
			console.log("The images are different");
			/* animation */
			bigImg.style.opacity = 1;
			let intervId = setInterval(()=>{
				bigImg.style.opacity -= 0.1;
				if (bigImg.style.opacity <= 0) {
					console.log(`bigImg.style.opacity ${bigImg.style.opacity}`);
					bigImg.setAttribute("src", newImg);
					clearInterval(intervId);
					showNewImg();
				}
			}, 100);
		}
		
	}
});

