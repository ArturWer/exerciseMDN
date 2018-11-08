let btn = document.querySelector("button");
function random(num) {
  return Math.floor(Math.random()*num);
}
/* btn.addEventListener("click", function(){
  let color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = color;
}, false);*/
function changeBgColor (){
  let color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = color;
};
btn.onmouseover = changeBgColor;

