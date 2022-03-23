// const obj = {
//   key: undefined
// };
// if ("key" in obj) {
//   console.log("keyプロパティは存在する");
// }

// console.log(Object.hasOwn(obj, "key"));
// if (obj.hasOwnProperty("key")) {
//   console.log("objはkeyプロパティを持っている");
// }

// function printWidgetTitle(widget) {
//   const title = widget?.window?.title ?? "未定義";
//   console.log(`ウィジェットのタイトルは${title}です`);
// }
// printWidgetTitle({
//   window: {
//     title: "Book Viewer"
//   }
// });

// const obj = {
//   "one": 1,
//   "two": 2,
//   "three": 3
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const objectA = {
//   a: "a"
// };
// const objectB = {
//   b: "b"
// };
// const merged = Object.assign(objectA, objectB);
// console.log(merged);

// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
function deepClone(obj) {
  const newObj = shallowClone(obj);
  Object.keys(newObj)
  .filter(k => typeof newObj[k] === "object")
  
}
const obj = { a: "a" };
const cloneObj = shallowClone(obj);
console.log(cloneObj); // => { a: "a" }
// オブジェクトを複製しているので、異なるオブジェクトとなる
console.log(obj === cloneObj); // => false
