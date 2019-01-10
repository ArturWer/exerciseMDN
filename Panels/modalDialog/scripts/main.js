"use strict"
let btn = document.querySelector('button.showDialog');
let modalDialog = document.querySelector("dialog");

btn.addEventListener("click", e =>{
	modalDialog.showModal();
});

modalDialog.addEventListener("click", e =>{
	modalDialog.close();
});