'use strict';
const $listOfText = document.querySelectorAll('.text span');
if (!$listOfText) throw new Error('$listOfText failed to query!');
let currIndex = 0;
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === $listOfText[currIndex].textContent) {
    $listOfText[currIndex].className = 'correct';
    currIndex++;
    $listOfText[currIndex].className = 'underline';
  } else {
    $listOfText[currIndex].className = 'incorrect';
  }
});
