
var userName = 'HieuNC';
var userName = 'Hieu Nguyen';
console.log('User Name : ', userName);

// ES6 features
let companyName = 'Balance';
companyName = 'BV';
console.log('Company Name : ', companyName);

const age = 27;
// age = 28;
console.log('Age : ', age);


function getUserName() {
    const name = 'HieuNC';
    return name;
}

// Block scoping

const fullName = 'Hieu Nguyen';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);