'use strict';
const $elem = document.querySelector('.click-button');
if (!$elem) throw new Error('$button does not exist');
$elem.addEventListener('click', (event) => {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
});
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
