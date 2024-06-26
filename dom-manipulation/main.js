'use strict';
let count = 0;
const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('The $hotButton query failed');
const $clickCount = document.querySelector('.click-count');
if (!$clickCount) throw new Error('The $clickCount query failed');
$hotButton.addEventListener('click', (event) => {
  count++;
  $clickCount.textContent = `Clicks: ${count}`;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  if (count > 16) $hotButton.className = 'hot-button nuclear';
  if (count < 16) $hotButton.className = 'hot-button hot';
  if (count < 13) $hotButton.className = 'hot-button warm';
  if (count < 10) $hotButton.className = 'hot-button tepid';
  if (count < 7) $hotButton.className = 'hot-button cool';
  if (count < 4) $hotButton.className = 'hot-button cold';
});
