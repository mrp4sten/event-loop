console.log("Hello");

setTimeout(() => console.log("time"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("World");
