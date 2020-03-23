// main.ts
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 is resolved later"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 is resolved earlier"), 500);
});
promise1.then(result => console.log(result));
promise2.then(result => console.log(result));
console.log("Start");
//# sourceMappingURL=main.js.map