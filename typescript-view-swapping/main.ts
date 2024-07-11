const $tabContainer = document.querySelector('.tab-container'); // single container
const $tabs = document.querySelectorAll('.tab'); // all tab elements
const $views = document.querySelectorAll('.view'); // all view elements

// Check if valid
if (!$tabContainer) throw new Error('$tabContainer failed to query!');
if (!$tabs.length) throw new Error('$tabs failed to query!');
if (!$views.length) throw new Error('$views failed to query!');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    const $dataSet = $eventTarget.dataset.view;

    $tabs.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    $views.forEach((view) => {
      const dataView = view as HTMLElement;

      if (dataView.dataset.view === $dataSet) {
        dataView.classList.remove('hidden');
      } else {
        dataView.classList.add('hidden');
      }
    });
  }
});
