const $listOfText = document.querySelectorAll('.text span');
if (!$listOfText) throw new Error('$listOfText failed to query!');
let currIndex = 0;
let numOfIncorrect = 0;
const sizeOfText = $listOfText.length;

document.addEventListener('keydown', (event: KeyboardEvent) => {
  const key = event.key;

  if (key === $listOfText[currIndex].textContent) {
    $listOfText[currIndex].className = 'correct';
    currIndex++;
    if (currIndex < sizeOfText) {
      $listOfText[currIndex].className = 'underline';
    }
  } else {
    $listOfText[currIndex].className = 'underline incorrect';
    numOfIncorrect++;
  }

  // Accuracy
  if (currIndex === sizeOfText) {
    const $accuracyElem = document.createElement('h2');
    $accuracyElem.setAttribute('class', 'accuracy');
    const $parent = document.querySelector('div');

    const totalKeystrokes = currIndex + numOfIncorrect;
    const accuracy = (currIndex / totalKeystrokes) * 100;

    $accuracyElem.textContent = `Accuracy: ${accuracy.toFixed(2)}%`;
    $parent?.appendChild($accuracyElem);
  }
});
