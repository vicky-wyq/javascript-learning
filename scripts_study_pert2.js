'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger(); 
logger(); 

function fruitProcessor(apples, oranges){
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration | can be called before it defined
function calcAge1(birthYear){
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression | can NOT be called before it defined
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



// arrow function
const calcAge3 = birthYear => 2037 - birthYear; // auto return, no braces
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// arrow does not get socal keyword ?


const cutPreces = function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges){
  const applePieces = cutPreces(apples);
  const orangePieces = cutPreces(oranges);
  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2,3));

const calcAge = function (birthYeah){
  return 2037 - birthYeah
}



const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// 2 data structure | array, object

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]); 

friends[2] = 'Jay'; // array is mutable 
console.log(friends);
// friends = ['Bob', 'Alice']; ❌

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
function calcAge(birthYear){
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// add friends
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

// remove friends
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // not exist = -1

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Bob')) {
  console.log('You have a friend called Steven');
} else {
  console.log('You do not have any friends');
}



// exercise 6: challenge #2
function calcTip(bills) {
  let tipValue;
  if (bills < 300 && bills > 50) {
      tipValue = bills * 0.15;
  } else {
      tipValue = bills * 0.20;
  }
  return tipValue;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

console.log(calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2]));

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

const total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2] ];
console.log(total);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
// the order does not matter for object(unstructured/unordered) | different from array(order) 
// change and retrieve the data
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']); // operation is an expression

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);// any expression inside of []
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); ❌
const interestedIn = prompt('What do you want to know about Joinas? Choose between firstName, lastName, age, job, and friends');



// undefined is falsy value
if(jonas[interestedIn]){
  console.log(jonas[interestedIn]); // undefined, because jonas does not have the property
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends'); 
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedman';
console.log(jonas);


// challenge
// "Jonas has 3 friends, his best friend is called Michael"

// Jonas     3     Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, his best friend is called ${jonas.friends[0]} `)


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYeah
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};
console.log(jonas);
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());


// console.log(jonas['calcAge'](1991));

// challenge
// "Jonas is a 46-year old teacher, and he has a/no drivers license"

// CHALLENGE #3 | Section 3 - 54

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// Calculate BMIs
mark.calcBMI();
john.calcBMI();

// Log BMIs
console.log(mark.bmi, john.bmi); // Mark's BMI and John's BMI

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`
  );
} else {
  console.log(`Mark Miller and John Smith have the same BMI (${mark.bmi}).`);
}


console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keepps running while condition is TRUE
for (let rep = 1; rep <= 10; rep = rep + 1) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);

}


const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i])
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages)

// continue and break

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);

}

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i = i - 1) {
  console.log(i, jonas[i], typeof jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(` Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}



console.log(`-------- For Loop --------`);
for (let rep = 1; rep <= 10; rep = rep + 1) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}



console.log(`-------- While Loop --------`);

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('Loop is about to end...');
}  



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

console.log(tips);


for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
const sum = [];

// total[0] + total [1]....


console.log(sum);

function calcTotal() {
  for (let i = 0; i < totals.length; i++) {
    totals[i]+totals[i];
  }


}


const x = '23';
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let seperator = '...';
  for (let i = 0; i < arr.length; i++) {
    seperator += `${arr[i]}°C in 1 day, ${i + 1} days `;
  }
  console.log(seperator);
}

printForecast(data1);
printForecast(data2);
