// function change() {
//   console.log('Hello World');
// }

// change()

// function change(string, changes) {
//   if (string === 'Hello') {
//     return changes;
//   } else {
//     return string;
//   }
// }

// console.log(change('Hi', 'Hello'));

// function something(a, b, ...c) {
//   console.log(...c)
// }

// something(1, 2, 3, 4, 5, 6);

function outstring() {
  console.log(arguments);
}

outstring(1, 2, 3, 4);