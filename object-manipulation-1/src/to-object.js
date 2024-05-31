'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  return { [key]: value };
}
/*
Note: '[]' are used to denote the property key

Ex:
  If you write { key: value }, JavaScript will use "key" as the literal property name.

If you write { [key]: value }, JavaScript will use the
value stored in the variable key as the property name.
*/
