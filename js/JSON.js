// parseメソッド
const json = '{"name":"John","age":30,"city":"New York"}';

const obj = JSON.parse(json);
console.log(obj);
console.log(obj.age);

const userInput = "not json value";
try {
  const json = JSON.parse(userInput);
} catch (error) {
  console.log(error);
}

// stringifyメソッド
const stringifyObj = { id: 1, name: "John", bio: null };
console.log(JSON.stringify(stringifyObj));

// replacer引数
const replacer = (key, value) => {
  if (value === null) {
    return undefined;
  }
  return value;
};
const whiteListReplacer = ["id", "bio"];
console.log(JSON.stringify(stringifyObj, replacer));
console.log(JSON.stringify(stringifyObj, whiteListReplacer));

// space引数
console.log(JSON.stringify(stringifyObj, null, "\t"))

console.log(JSON.stringify({x: function() {}}));
console.log(JSON.stringify({x: [10, function() {}]}))

const circularObj = {foo: "foo"}
circularObj.self = circularObj;
try {
  JSON.stringify(circularObj);
} catch (error) {
  console.error(error);
}

// toJSONメソッドを使ったシリアライズ
const toJSONObj = {
  foo: "foo",
  toJSON() {
    return "bar"
  }
};
console.log(JSON.stringify(toJSONObj));
console.log(JSON.stringify({ x:  toJSONObj}));