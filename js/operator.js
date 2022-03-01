// const valueA = true ? "A" : "B";
// console.log(valueA);

// const valueB = false ? "A" : "B";
// console.log(valueB);

// // function addPrefix(text, prefix) {
// //   const pre = typeof prefix === "string" ? prefix : "デフォルト";
// //   return pre + text;
// // }
// // console.log(addPrefix("文字列", ""));
// // console.log(addPrefix("文字列", "カスタム"));

// function addPrefix1(text, prefix) {
//   let pre = "デフォルト";
//   if (typeof prefix === "string") {
//     pre = prefix;
//   }
//   return pre + text;
// }

// console.log(addPrefix1("文字列"));
// console.log(addPrefix1("文字列", "カスタム"));

// const a = 1;
// const b = "2";
// console.log(a +b);
// const c = 3;
// console.log(a + b * c);
// console.log((a + b) * c);


// const isAbString = typeof a === "string" && typeof b === "string";
// const isXyNumber = typeof x === "number" && typeof y === "number";
// if (isAbString || isXyNumber) {
//   console.log("成功");
// }

// const a = 1 , b = 2, c = a + b;
// console.log(c);
async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test()
  return await result
}

function test() {
  return {
    id: this.id,
    full_name: this.family_name + ' ' + this.first_name,
    first_name: this.first_name,
    family_name: this.family_name,
    affilication: this.affilication,
    is_student: this.is_student
  }
}

async function main() {
  const results = await test();
  const elem = document.getElementById("result");
  results.forEach(result => {
      let li = document.createElement('li');
      let text = document.createTextNode(result.full_name);
      li.appendChild(text);
      elem.appendChild(li);
  })
}

main()

// async function main() {
//   const results = await test();
//   const elem = document.getElementById("result");
//   results.forEach(result => {
//       let li = document.createElement('li');
//       let text = document.createTextNode(result.full_name);
//       li.appendChild(text);
//       elem.appendChild(li);
//   })
// }