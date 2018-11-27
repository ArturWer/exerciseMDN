let link = document.querySelector("a");
let img = document.querySelector("img");
link.textContent = 'Mozilla Developer Network';

let sect = document.querySelector("section");
let para = document.createElement("p");
let textP = document.createTextNode("I'm a new text Node");
para.appendChild(textP);
sect.appendChild(para);