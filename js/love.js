// const onClickStartAppearance = () => {
//   const startButton = document.getElementById('start_button');
//   // 容姿の水準
//   startButton.addEventListener('click', () => {
//     const appearance_level = Math.floor(Math.random() * (100 - 1) + 1);
//     // 容姿の水準が50以上なら最低水準はクリアと表示
//   if (appearance_level >= 50) {
//     console.log('クリア');
//   } else {
//     console.log('恋愛対象外です');
//   }
//   });
// }

// // なるお流：恋愛マスターを習得する

const dogs = [
  {
    id: 1,
    type: "toyPoodle",
    weight: 4,
  },
  {
    id: 2,
    type: "husky",
    weight: 20,
  },
  {
    id: 3,
    type: "pug",
    weight: 7.5,
  },
];

dogs.forEach(dog => {
  console.log(dog.type);
});

const filteredWeight = [dogs.filter(dog => {
  return dog.weight > 8;
})]
console.log(filteredWeight); 