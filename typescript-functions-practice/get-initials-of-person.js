'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName[0][0] + person.lastName[0][0];
}
