/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// Ex. 1
const isUnderFive = (number: number): boolean => number < 5;

// Test cases for isUnderFive
console.log('isUnderFive(4):', isUnderFive(4));
console.log('isUnderFive(10):', isUnderFive(10));
console.log('isUnderFive(5):', isUnderFive(5));

// Ex. 2
function isEven(number: number): boolean {
  return number % 2 === 0;
}

// Test cases for isEven
console.log('isEven(4):', isEven(4));
console.log('isEven(10):', isEven(10));
console.log('isEven(5):', isEven(5));

// Ex. 3
const startsWithJ = (string: string): boolean =>
  string[0].toUpperCase() === 'J';

// Test cases for startsWithJ
console.log("startsWithJ('JavaScript'):", startsWithJ('JavaScript'));
console.log("startsWithJ('PHP'):", startsWithJ('PHP'));

// Ex. 4
interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  return person.age >= 21;
}

const person: Person = { name: 'Jesus Rodriguez-Luna', age: 24 };

// Test case for isOldEnoughToDrink
if (isOldEnoughToDrink(person)) {
  console.log(`${person.name} is of legal age to drink!`);
} else {
  console.log(`${person.name} is NOT of legal age to drink!`);
}

// Ex. 5
const isOldEnoughToDrive = (person: Person): boolean => person.age >= 16;

const homer: Person = { name: 'Homer Jay Simpson', age: 39 };

// Test case for isOldEnoughToDrive
console.log('isOldEnoughToDrive(homer):', isOldEnoughToDrive(homer));

if (isOldEnoughToDrive(homer)) {
  console.log(`${homer.name} is of legal age to drive!`);
} else {
  console.log(`${homer.name} is not of legal age to drive.`);
}

// Ex. 6
function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  console.log(`${person.name.split(' ')[0]}, this is illegal.`);
  return false; // Always false since it's illegal to drink and drive
}

const johnDoe: Person = { name: 'John Doe', age: 34 };

// Test case for isOldEnoughToDrinkAndDrive
console.log(
  'isOldEnoughToDrinkAndDrive(johnDoe):',
  isOldEnoughToDrinkAndDrive(johnDoe)
);

// Ex. 7
function categorizeAcidity(pH: number): string {
  if (pH < 0 || pH > 14) return 'invalid pH level';
  if (pH === 7) return 'neutral';
  if (pH < 7) return 'acid';
  return 'base';
}

// Test cases for categorizeAcidity
console.log('categorizeAcidity; -1, 14.0000001, 7, 2, 9:');
console.log(' ', categorizeAcidity(-1));
console.log(' ', categorizeAcidity(14.0000001));
console.log(' ', categorizeAcidity(7));
console.log(' ', categorizeAcidity(2));
console.log(' ', categorizeAcidity(9));

// Ex. 8
const introduceWarnerBro = (name: string): string => {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
};

// Test cases for introduceWarnerBro
console.log('introduceWarnerBro:');
console.log(' yakko:', introduceWarnerBro('yakko'));
console.log(' wakko:', introduceWarnerBro('wakko'));
console.log(' dot:', introduceWarnerBro('dot'));
console.log(' cody:', introduceWarnerBro('cody'));
console.log(' minerva:', introduceWarnerBro('minerva'));

// Ex. 9
function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'John Wick';
    case 'comedy':
      return 'Superbad';
    case 'horror':
      return 'The Conjuring';
    case 'drama':
      return 'Forrest Gump';
    case 'musical':
      return 'The Greatest Showman';
    case 'sci-fi':
      return 'Inception';
    default:
      return 'Genre not recognized';
  }
}

// Test cases for recommendMovie
console.log('recommendMovie:');
console.log(' action:', recommendMovie('action'));
console.log(' comedy:', recommendMovie('comedy'));
console.log(' horror:', recommendMovie('horror'));
console.log(' drama:', recommendMovie('drama'));
console.log(' musical:', recommendMovie('musical'));
console.log(' sci-fi:', recommendMovie('sci-fi'));
console.log(' fantasy:', recommendMovie('fantasy'));
