let verseChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

function updateDisplay(verse) {
	let word = verse.toLowerCase();
	word = word.replace(" ", "");
    let url = `src/${word}.txt`;
	console.log(word);
	fetch(url).then(function(response) {
	  response.text().then(function(text) {
	    poemDisplay.textContent = text;
	  });
	});
};
verseChoose.onchange = function() {
  let verse = verseChoose.value;
  updateDisplay(verse);
};
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';