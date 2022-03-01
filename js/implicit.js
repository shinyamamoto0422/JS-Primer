// console.log(1 === "1");
// console.log(1 == "1");
// console.log(1 + true);
// console.log(0 == false);
// console.log(10 == ["10"]);

// console.log(1 + "2");
// console.log(1 - "1");

// const x = 1, y = "2", z = 3;
// console.log(x + y + z);

// console.log(Boolean("string"));
// console.log(Boolean(1));
// console.log(Boolean({}));
// console.log(Boolean(0));
// console.log(Boolean(null));

// let a = undefined;
// if (!a) {
//   console.log("falsyな値なら表示", a);
// }

// console.log(String(null));

// console.log(Symbol("シンボル"));
// console.log("文字列と" + String(Symbol('シンボル')));


// // const input = window.prompt('数字を入力してください。 , "42');
// // const num = Number(input);
// // console.log(typeof num);
// // console.log(num);

// console.log(Number.parseInt("42.14", 10));
// console.log(Number("文字列"));

// const userInput = window.prompt('数字を入力してください', 10);
// const num = Number.parseInt(userInput, 10);
// console.log(num);

// console.log(Number.isNaN(0/0)); // => true
// console.log(Number.isNaN("文字列")); // => false
// // const userInput = window.prompt('何かを入力してください');
// const num = Number.parseInt(userInput, 10);
// if (!Number.isNaN(num)) {
//   console.log("Nanではない値にパースできた", num);
// }
console.log(Number({}));
const x = 10;
const y = x + NaN;
console.log(y);
console.log(typeof NaN);

function isNaN(x) {
  return x != x;
};
console.log(isNaN(1));
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
