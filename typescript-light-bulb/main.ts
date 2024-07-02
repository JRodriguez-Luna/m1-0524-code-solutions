const $backgroundColor = document.querySelector('.light');
const $lightBulb = document.querySelector('#light-bulb');

if (!$backgroundColor || !$lightBulb)
  throw new Error('$backgroundColor or $lightBulb failed to query!');

$lightBulb.addEventListener('click', () => {
  if ($lightBulb.classList.contains('on')) {
    $backgroundColor.classList.replace('light', 'dark');
    $lightBulb.classList.replace('on', 'off');
  } else {
    $backgroundColor.classList.replace('dark', 'light');
    $lightBulb.classList.replace('off', 'on');
  }
});
