console.log('main.js loaded');

let customName = document.getElementById('customName');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. :Bob: saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ['Willy the Goblin',
			   'Big Daddy',
			   'Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/2.205);
    let temperature =  Math.round((94-32)*5/9);
    newStory = newStory.replace('300 pounds', `${weight} kg`);
    newStory = newStory.replace('94 fahrenheit', `${temperature} \u00B0`);
  }

  let 	xitem = randomValueFromArray (insertX),
  		yitem = randomValueFromArray (insertY),
  		zitem = randomValueFromArray (insertZ);
	newStory = newStory.replace('insertx', xitem);
	newStory = newStory.replace('insertx', xitem);
	newStory = newStory.replace('inserty', yitem);
	newStory = newStory.replace('insertz', zitem);
	console.log(newStory);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
