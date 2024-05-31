/* exported getValues */
const getValues = (object: any): string[] => {
  const result: string[] = [];
  for (const key in object) result.push(object[key]);
  return result;
};
