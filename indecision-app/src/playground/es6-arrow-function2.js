console.log('Right here');

// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
// console.log(arguments);
//   return a + b;
// };

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 2, 1000));


// this keyword - no longer bound

const user = {
    name: 'HieuNC',
    cities: ['Hanoi', 'HCM'],
    printPlacesLived: function () {
        // const self = this;
        //   console.log(self.name);

        // this.cities.forEach(function (city) {
        //     console.log(self.name + ' has lived in ' + city );
        // });

        // Arrow function
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city
        });

        // const cityMessages = this.cities.map((city) => {
        //     // return city;
        //     return this.name + ' has lived in ' + city;
        // });

        // return cityMessages;

        // Arrow function
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city );
        // });
    }
};

// user.printPlacesLived();
console.log(user.printPlacesLived());

// For example

const multiplier = {
    numbers: [10, 20, 25],
    multipleBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multipleBy);
    }
};

console.log(multiplier.multiply());