//=====================1=========================
const cars = ['Tesla', 'Mercedes', 'Honda'];

const [randomCar] = cars;
const [, otherRandomCar] = cars;



console.log(randomCar);//Tesla
console.log(otherRandomCar);//Mercedes

//====================2=========================
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};

const { name: otherName } = employee;

//Error: Elon is not defined

console.log(name);// not defined
console.log(otherName); //Elon

//====================3=========================
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};

const password = '12345';

const { password: hashedPassword } = person;

// 12345
// undefined

console.log(password);
console.log(hashedPassword);

//====================4=========================
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];

const [, first] = numbers;

const [,,, second] = numbers;

const [,,,,,,,, third] = numbers;

//false
//true


console.log(first == second);
console.log(first == third);

//====================5=========================
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};

const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;

//value
// [1, 5, 1, 8, 3, 3]
//1
//5

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
