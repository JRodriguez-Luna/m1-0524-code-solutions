/* exported getFullNameOfPerson */

// interface Person...

function getFullNameOfPerson(person: Person): string {
  return person.firstName + ' ' + person.lastName;
}
