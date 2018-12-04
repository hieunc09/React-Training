console.log('ES6 ARROW FUNCTION');

const square = function (x) {
  return x * x;
};

console.log(square(10));

// const arrow = (x) => {
//   return x * x;
// };

const arrow = (x) => x * x;

console.log(arrow(5));

// Use arrow functions - ES6

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[1];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Hieu Nguyen'));
