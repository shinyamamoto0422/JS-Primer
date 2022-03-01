function getData() {
  const test = [
    {
      id: 1,
      name: '新',
      family_name: '山本',
      affiliation: '同志社大学',
      is_student: true
    },
    {
      id: 2,
      name: '颯太',
      family_name: '辻井',
      affiliation: '東京大学',
      is_student: false
    }
  ];
  return test;
}
console.log(getData());

function buildFullName() {
  const data = getData();
  const result = data.map(function(item) {
    return item.family_name + item.name;
  });
  return result;
}

// function buildFullName() {
//   getData().map((person) => {
//     return {
//       id: person.id,
//       name: person.name,
//       fullName: person.family_name + person.name,
//       affiliation: person.affiliation,
//       is_student: person.is_student
//     }
//   })
// }
console.log(buildFullName());