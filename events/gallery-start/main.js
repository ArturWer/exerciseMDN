var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
	let name = `images/pic${i}.jpg`;

  var newImage = document.createElement('img');
  newImage.setAttribute('src', name);
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

