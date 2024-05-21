/* exported getDescriptionOfPerson */
interface Human {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: Human): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
