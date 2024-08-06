const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay did not query.');

let count = Number($countdownDisplay.textContent);

const countdown = setInterval(function () {
  count--;

  $countdownDisplay.textContent = count.toString();

  if (count <= 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  }
}, 1000);
