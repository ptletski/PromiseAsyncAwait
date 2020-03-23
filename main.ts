// main.ts

const promise1: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 is resolved later"), 1000)
});

const promise2: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 is resolved earlier"), 500)
});

promise1.then(result => console.log(result));
promise2.then(result => console.log(result));

console.log("Start");




