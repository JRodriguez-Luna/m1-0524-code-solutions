console.log('hello, world');

const $h1 = document.querySelector('h1');
console.log('log:', $h1);
console.dir('dir:', $h1);

const $explanation = document.querySelector('#explanation');
console.log('log:', $explanation);
console.dir('dir:', $explanation);

const $hint = document.querySelector('.hint');
console.log('log:', $hint);
console.dir('dir:', $hint);

const $p = document.querySelectorAll('p');
console.log($p);

const $exampleLink = document.querySelectorAll('.example-link');
console.log($exampleLink);