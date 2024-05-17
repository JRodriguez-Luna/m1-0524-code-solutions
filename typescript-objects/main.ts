// Student Object
interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

// Vehicle Object
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

// Pet Object
interface Pet {
  name?: string;
  kind?: string;
}

// Creating a student object using literal notation
const student: StudentProps = {
  firstName: 'Jesus',
  lastName: 'Rodriguez-Luna',
  age: 24,
};

// Using template literals to interpolate and log the student's full name
const fullName: string = `${student.firstName} ${student.lastName}`;
console.log('Full Name:', fullName);

// Adding properties to the student object
student.livesInIrvine = false;
student.previousOccupation = 'CVS Pharmacy';
console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

// Logging the complete student object
console.log('Student Object:', student);

// Creating a vehicle object using literal notation
const vehicle: Vehicle = {
  make: 'Honda',
  model: 'Civic Type R',
  year: 2023,
};

// Adding properties to the vehicle object
vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('Color:', vehicle['color']);
console.log('is Convertible:', vehicle['isConvertible']);

// Logging the complete vehicle object and its type
console.log('Vehicle Object:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

// Creating a pet object using literal notation
const pet: Pet = {
  name: 'Sharky',
  kind: 'Shark',
};

// Deleting properties from the pet object
delete pet.name;
delete pet.kind;

// Logging the pet object after deletion and its type
console.log('Pet Object:', pet);
console.log('typeof pet:', typeof pet);
