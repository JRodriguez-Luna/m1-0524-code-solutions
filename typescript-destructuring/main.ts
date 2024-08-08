// interface named Book
interface Book {
  title: string;
  author: string;
  libraryId: number;
}

// annotate your book1 variable as Book.
const book1: Book = {
  title: 'Goodnight Punpun',
  author: 'Inion Asano',
  libraryId: 3353,
};

// Destructure book1 to create three constant
// with the same names as book1's property names
const { title, author, libraryId } = book1;

// console log the sentence
console.log(
  `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryId}.`
);

// annotate your book2 variable as Book
const book2: Book = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};

// Destructure the properties book2
// use aliasing to avoid clashing with the constants you declared earlier.
const {
  title: titleBook,
  author: authorBook,
  libraryId: libraryIdBook,
} = book2;

// console log the sentence
console.log(
  `The title of the book is ${titleBook}, the author is ${authorBook}, and the library id is ${libraryIdBook}.`
);

// array of objects in one statement and assign it to the variable library
const library: Book[] = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];

// Destructure the first three objects from library into the three variables
const [book3, book4, book5] = library;

// log these three book objects
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

// destructure the last object from library into the variable book6
const [, , , book6] = library;

// log the last book
console.log('book6:', book6);
