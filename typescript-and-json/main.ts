const books = [
  { isbn: '978-1975319274', title: 'Solo Leveling, Vol. 1', author: 'Chugong' },
  {
    isbn: '978-1975319298',
    title: 'Solo Leveling, Vol. 2',
    author: 'Chugong',
  },
  { isbn: '978-1975319311', title: 'Solo Leveling, Vol. 3', author: 'Chugong' },
];

console.log('books array:', books);
console.log('typeof books array:', typeof books);

const booksJSON = JSON.stringify(books);

console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

const studentJSON = '{"id": "A0298176", "name": "Jesus Rodriguez-Luna"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log('studentObj:', studentObj);
console.log('typeof studentObj:', typeof studentObj);
