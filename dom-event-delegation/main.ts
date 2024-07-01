const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList failed!');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);

  if (eventTarget.tagName.match('BUTTON')) {
    const $ancestorElem = eventTarget.closest('.task-list-item');
    if (!$ancestorElem) throw new Error('$ancestorElem failed!');

    console.log('Closest:', $ancestorElem);
    $ancestorElem.remove();
  }
});
