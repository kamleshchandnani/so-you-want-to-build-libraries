// //------ lib.js ------
// export let counter = 3;
// export const incCounter = () => {
//     counter++;
// }

// //------ main.js ------
// import { counter, incCounter } from './lib';

// // The imported value `counter` is live
// console.log(counter); // 3
// incCounter();
// console.log(counter); // 4

// //------ lib.cjs.js ------
// let counter = 3;
// const incCounter = () => {
//     counter++;
// }

// module.exports = {
//   counter,
//   incCounter
// }

// //------ main.js ------
// const lib = require('./lib.cjs');

// // The imported value `counter` is not live
// console.log(lib.counter); // 3
// lib.incCounter();
// console.log(lib.counter); // 3

// module.exports = {
//   counter,
//   incCounter
// }

// // es classes and static
// //------ lib.es.js ------
// export default class Counter {
//   static counter = 3;
// }

// export const showCounter = () => {
//   console.log('counter', Counter.counter);
// }

// //------ main.js ------
// import Counter, { showCounter } from './lib';

// // The imported value `counter` is live
// console.log(Counter.counter) // 3
// Counter.counter++
// console.log(Counter.counter) // 4
