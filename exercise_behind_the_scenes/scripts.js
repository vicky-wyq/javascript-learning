"use strict";
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name as outer scope's variable
      const firstName = "Steven";

      //reassigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName};`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); ❌

    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = "Jonas";

console.log(calcAge(1991));
// console.log(age); ❌
// print(age); ❌

// variables
// console.log(me); // undefined
// console.log(job); // cannot access | TDZ (let and const)
// console.log(year); // cannot access | TDZ (let and const)

var me = "Jonas";
let job = "Teacher";
const year = 1991;

// functions
console.log(addDecl(2, 3)); // can call before function
// console.log(addExpr(2,3)); // cannot access | TDZ (let and const) | variable this equal const
// console.log(addArrow(2,3));
// console.log(addArrow(2,3)); // cannot access | TDZ (let and const)

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example
console.log(undefined); // falsy data
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted!");
}

// dont use var, use const(if possible). variable on top, keep code clean, use function after decleared

var x = 1; // will declear a varible in the property
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // this = jonas
    console.log(2037 - this.year); 
  },
};
jonas.calcAge();


const matilda = {
  year: 2017,

};

matilda.calcAge = jonas.calcAge; // copy/borrwing data
matilda.calcAge();

const f = jonas.calcAge;
f();



// var firstName = 'Matilda'
// var creates property in window project

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this); // this = jonas

    // solution 1
    //   const self = this; // self or that
    //   const isMillenial = function () {
    //     console.log(self);

    //     console.log(2037 - self.year);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    // solution 2

    const self = this; // self or that
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    //  greet: function(){}
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
//object literal is not a code block | object literal is globle scope
jonas.greet();
// console.log(this.firstName);
// never use arrow function as a methord, never use this key word in perticular methord

jonas.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;}

  addArrow(2,5,8); // ❌


*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);

console.log("Me", me);
