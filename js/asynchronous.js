try {
  throw new Error('同期的なエラー');
} catch (error) {
  console.log("同期的なエラーをキャッチできる");
}
console.log("この行は実行されます");

// 非同期処理の外
setTimeout(() => {
  // 非同期処理の中
  try {
      throw new Error("エラー");
  } catch (error) {
      console.log("エラーをキャッチできる");
  }
}, 10);
console.log("この行は実行されます");


function dummyFetch(path, callback) {
  setTimeout(() => {
    if (path.startsWith("/success")) {
      callback(null, { body: `Response body of ${path}` });
    } else {
      callback(new Error('not found'));
    }
  }, 1000 * Math.random());
}
dummyFetch('/success/data', (error, response) => {
  if (error) {
    // この行は実行されない
  } else {
    console.log(response);
  }
});
dummyFetch("/failure/data", (error, response) => {
  if (error) {
    console.log(error.message);
  } else {
    // この行は実行されない
  }
})

// asyncTask((error, result) => {
//   if (error) {
//     console.log("失敗");
//   } else {
//     console.log("成功");
//   }
// })
asyncPromiseTak().then(() => {
  console.log("成功");
}).catch(() => {
  console.log("失敗");
})