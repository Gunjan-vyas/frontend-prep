// const fetch = require("node-fetch"); // If running in Node.js, otherwise in browser, fetch is globally available
// Act 1

let promise = new Promise((resolve, reject) => {
  resolve("Resolve with some message");
});

// case 1: using then and catch
promise.then((res) => console.log(res));

//case 2: using async and await;
let res = async () => {
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

res();

// let res = async () => await promise;
// res()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//ACT 2

import fetch from "node-fetch";

new Promise((resolve, reject) => {
  reject("wait for 2 seconds");
  setTimeout(() => reject("Error after 2 seconds"), 2000);
}).catch((err) => console.log(err));

//ACT2
// promises chain
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

new Promise((resolve, reject) => {
  resolve("first");
})
  .then((res) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/1");
  })
  .then((res) => res.json()) // Parse the JSON response
  .then((data) => {
    console.log("second", data);
  })
  .catch((err) => {
    console.log(err);
  });

//ACT 3
let prom = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve("resolve after 5 second");
  }, 5000);
});

(async () => {
  let res = await prom;
  console.log("will wait for 5 second here itself");
  return res;
})()
  .then((res) => {
    console.log("resulta", res);
  })
  .catch((e) => console.log(e));

(
  try{
    promise.resolve();
  } catch(e){

  }
)()
  