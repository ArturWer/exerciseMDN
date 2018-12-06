let verseChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

function updateDisplay(verse) {
	console.log(verse);
};
verseChoose.onchange = function() {
  let verse = verseChoose.value;
  updateDisplay(verse);
};