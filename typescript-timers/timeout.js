'use strict';
const $msg = document.querySelector('.message');
if (!$msg) throw new Error('$msg did not query.');
setTimeout(function () {
  $msg.textContent = 'Hello there';
}, 2000);
