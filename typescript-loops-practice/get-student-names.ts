/* exported getStudentNames */
const getStudentNames = (students: Array<{ name: string }>): string[] => {
  const names = [];

  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }

  return names;
};
