let verseChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

function updateDisplay(verse) {
	let word = verse.toLowerCase();
	word = word.replace(" ", "");
    word = `src/${word}.txt`;
	console.log(word);
	let request = new XMLhttpRequest();
	request.open("GET", url);
	request.responseType = 'text';
};
verseChoose.onchange = function() {
  let verse = verseChoose.value;
  updateDisplay(verse);
};