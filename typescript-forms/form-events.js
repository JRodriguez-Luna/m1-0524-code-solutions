'use strict';
function handleFocus(event) {
  console.log("'focus' event was fired.");
  const $eventTarget = event.target;
  console.log('eventTarget Name:', $eventTarget.name);
}
function handleBlur(event) {
  console.log("'blur' event was fired.");
  const $eventTarget = event.target;
  console.log('eventTarget Name:', $eventTarget.name);
}
function handleInput(event) {
  const $eventTarget = event.target;
  console.log('eventTarget Name:', $eventTarget.name);
  console.log('eventTarget Value:', $eventTarget.value);
}
const form = document.querySelector('#contact-form');
const formElements = form?.elements;
if (!formElements) throw new Error('formElements failed to query!');
const $inputOne = formElements[0];
const $inputTwo = formElements[1];
const $textArea = formElements[2];
if (!$inputOne || !$inputTwo || !$textArea)
  throw new Error('inputOne, inputTwo, or textArea failed to query!');
$inputOne.addEventListener('focus', handleFocus);
$inputOne.addEventListener('blur', handleBlur);
$inputOne.addEventListener('input', handleInput);
$inputTwo.addEventListener('focus', handleFocus);
$inputTwo.addEventListener('blur', handleBlur);
$inputTwo.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
