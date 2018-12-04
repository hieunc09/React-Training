
console.log('ES6 Classes');

// const root = document.getElementById('app');

class Person {
    constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name;
        return `Hi. I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let desc = super.getDescription();

        if(this.hasMajor()) {
            desc += ` Their major is ${this.major}`;
        }

        return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I am from ${this.homeLocation}`;
            if(this.age) {
                greeting += ` and I am ${this.age} year(s) old`;
            }
        }

        return greeting;
    }
}

const me = new Traveler('HieuNC', undefined, 'Vietnam');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Hanoi');
console.log(other.getGreeting());


