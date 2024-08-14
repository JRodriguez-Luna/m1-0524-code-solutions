const $img = document.querySelector('#main-img img') as HTMLImageElement;
const $prev = document.querySelector('#left-arrow');
const $next = document.querySelector('#right-arrow');
const $dots = document.querySelectorAll('.dot');

const images = ['001.png', '004.png', '007.png', '025.png', '039.png'];
let count = 0;

if (!$img) throw new Error('$img did not query!');
if (!$prev) throw new Error('$prev did not query!');
if (!$next) throw new Error('$next did not query!');

function updateCarousel(): void {
  $img.src = `./images/${images[count]}`;

  $dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  const $activeDot = document.querySelector(`[data-dot="${count + 1}"]`);

  if ($activeDot) {
    $activeDot.classList.add('active');
  }
}

$next.addEventListener('click', () => {
  count++;

  if (count >= images.length) count = 0;
  updateCarousel();
});

$prev.addEventListener('click', () => {
  count--;

  if (count < 0) count = images.length - 1;
  updateCarousel();
});
