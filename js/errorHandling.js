// try...catch構文のtryブロック内で例外が発生すると、
// tryブロック内のそれ以降の処理は実行されず、catch節に処理が移行します。
//  catch節は、tryブロック内で例外が発生すると、発生したエラーオブジェクトとともに呼び出されます。 
// finally節は、tryブロック内で例外が発生したかどうかには関係なく、必ずtry文の最後に実行されます。
try {
  console.log("try節でエラーが発生しました");
  undefinedFunction();
} catch (error) {
  console.log("catch節でエラーが発生しました。");
} finally {
  console.log("finally節でエラーが発生しました。");
}

try {
  console.log("try節でエラーが発生しました");
  undefinedFunction();
} catch (error) {
  console.log("catch節でエラーが発生しました。");
  console.log(error instanceof ReferenceError);
  console.log(error.message);
} finally {
  console.log("finally節でエラーが発生しました。");
}

try {
  throw new Error("例外が投げられました");
} catch (error) {
  console.log(error.message);
}

function assertPositiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num}は正の数ではありません`);
  }
}
try {
  assertPositiveNumber(-1);
} catch (error) {
  console.log(error instanceof Error);
  console.log(error.message);
}

// try {
//   const fn = {};
//   fn();
// } catch {
//   console.log(error instanceof TypeError);
//   console.log(error.name);
//   console.log(error.message);
// }

function reverseString(str) {
  if (typeof str !== "string") {
      throw new TypeError(`${str} is not a string`);
  }
  return Array.from(str).reverse().join("");
}

try {
  // 数値を渡す
  reverseString(100);
} catch (error) {
  console.log(error instanceof TypeError); // => true
  console.log(error.name); // => "TypeError"
  console.log(error.message); // "100 is not a string"
}

function fn() {
  console.log("メッセージ");
  console.error("エラーメッセージ");
}
fn();