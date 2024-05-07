// loops

// const userNumber = Number(prompt("give me a number:")); // 2

// let i = 0;

// while (i < userNumber) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < userNumber);

// for (let i = 0; i < userNumber; i++) {
//   console.log(i);
// }

// let usersDetails = [
//   { id: 1, fullName: "Hussain", color: "blue" }

// for (let userDetail of usersDetails) {
//   for (let user in userDetail) {
//     console.log(`${user} is ${userDetail[user]}`);
//   }
// }

// for (let i = 0; i < names.length; ++i) {
//   if (names[i] === "Maxime") {
//     continue;
//   }
//   console.log(names[i]); //invite to dinner
// }

// for (username of names) {
//   console.log(username);
// }

let userDetails = { id: 1, fullName: "Hussain", color: "blue" };

// const userDetailsKeysArray = Object.keys(userDetails);
// const userDetailsValuesArray = Object.values(userDetails);
for (let [key, value] of Object.entries(userDetails)) {
  // console.log(key + " is " + value);
  console.log(`${key} is 
  
  ${value}`);
}

// functions

const trainsArrivalTimings = {
  train_1: "11",
  train_2: "12",
  train_3: "13",
};

function markTrainAttendece() {
  // attedence marked
}

function isTrainArrivedOnTime(trainName, arrivalTime) {
  // for (let i in trainsArrivalTimings) {
  //   if (trainName === i) {
  //     markTrainAttendece();
  //     if (arrivalTime <= trainsArrivalTimings[i]) {
  //       return true;
  //     }
  //   }
  // }

  // return false;

  const trainActualArriveTime = trainsArrivalTimings[trainName];
  if (trainActualArriveTime) {
    markTrainAttendece();
    return arrivalTime <= trainActualArriveTime;
  }
  return false;
}

const isTrain1ArrivedOnTime = isTrainArrivedOnTime("train_2", "14");

console.log(isTrain1ArrivedOnTime);


const trainsArrivalTimings = {
  train_1: "11",
  train_2: "12",
  train_3: "13",
};

// const isTrainArrivedOnTimeAnon = (trainName, arrivalTime) => {
//   const trainActualArriveTime = trainsArrivalTimings[trainName];
//   if (trainActualArriveTime) {
//     return arrivalTime <= trainActualArriveTime;
//   }
//   return false;
// };

// console.log(isTrainArrivedOnTimeAnon("train_2", "11"));

// spread operator

const classA = ["A", "B", "S", "R"];
const classB = ["S", "R", "W", "M"];

function calculateAllStudents(...rest) {
  const r = rest[5];
  const m = rest[rest.length - 1];
  return [r, m];

  // return [rest[5], rest[rest.length - 1]];
}

// const calculateAllStudents = (...rest) => [rest[5], rest[rest.length - 1]];

// const result = calculateAllStudents(...classA, ...classB);
// console.log(result);

// let vs var scope

// function doingStuff() {
//   if (true) {
//     let x = "local";
//   }
//   console.log(x);
// }
// doingStuff();

function doingStuff() {
  // var x;

  if (true) {
    var x = "local";
    console.log(x);
  }
}

// doingStuff();



// function addSum(num1, num2) {
//   const total = num1 + num2;
//   return total;
// }

// const result = addSum(1, 2);

// (() => {
//   const total = 2 + 3;
//   console.log("run");
//   return total;
// })();

// function printNumberInDecrement(num) {
//   console.log(num);
//   if (num < 1) {
//     return;
//   }

//   printNumberInDecrement(num--);
// }

// function factorialRecursive(num) {
//   if (num <= 0) {
//     return 1;
//   }

//   const result = num * factorialRecursive(--num);
//   return result;
// }

// console.log(factorialRecursive(6));

// Nested functions // closure

// function headoffice(officeName, officeLocation) {
//   // console.log("headoffice called", officeName, officeLocation);
//   return function (branchName, branchLocation) {
//     // console.log(`headoffice name: ${officeName}`);
//     // console.log(`headoffice location: ${officeLocation}`);
//     // console.log(`branch name: ${branchName}`);
//     // console.log(`branch location: ${branchLocation}`);

//     return function (roomNum) {
//       console.log(`headoffice name: ${officeName}`);
//       console.log(`headoffice location: ${officeLocation}`);
//       console.log(`branch name: ${branchName}`);
//       console.log(`branch location: ${branchLocation}`);
//       console.log(`Room#: ${roomNum}`);
//     };
//   };
// }

// const branchFunc = headoffice("saylani", "bahadurabad");
// const MaJinnahRooms = branchFunc("branch 1", "MA Jinnah");
// const GulshanRooms = branchFunc("branch 2", "Gulshan");

// MaJinnahRooms(3);
// GulshanRooms(5);

// function global(name) {
//   return function country(countryName) {
//     return function city(cityName) {
//       return function branch(branchName) {
//         console.log(
//           `global ${name}, country ${countryName}, city: ${cityName}, branch ${branchName}`
//         );
//       };
//     };
//   };
// }

// const globalRef = global("global");

// const UKRef = globalRef("UK");
// const PakistanRef = globalRef("Pakistan");

// const UKCityRef = UKRef("London");
// const PakCityRef = PakistanRef("Karachi");

// if(UKCityRef){ // UKCityNeedsHelp
//   PakCityRef.call()
// }

// UKCityRef.CallOtherCity(PakCityRef)

// PassByValue & PassByReference

const name = "Noor"; //[123];
const names = ["A", "V", "C"]; // [111, 112, 113]

// classes (OOP)

// class UserAccount {
//   #username;
//   #password;

//   constructor(username, password) {
//     this.firstName = "Konain";
//     (this.lastName = "Raza"), (this.#username = username);
//     this.#password = `${password}_sensitiveData`;
//     this.userId = new Date().toISOString();
//   }

//   set setPassword(newPassword) {
//     if (newPassword.length <= 8) {
//       alert("Password must be atleast 8 characters long");
//       return;
//     }
//     this.#password = `${newPassword}__sensitiveData`;
//   }

//   get getPassword() {
//     return "autogeneratedpassword";
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const KonainRaza = new UserAccount("konain", "123");
// console.log(KonainRaza);

// // KonainRaza.setPassword = "456";
// // console.log(KonainRaza);

// console.log(KonainRaza.getPassword);
// console.log(KonainRaza.getFullName());

class Car {
  #chassis;
  constructor(chassis, noOfTires, noOfSeats, bodyColor) {
    this.#chassis = chassis;
    this.noOfSeats = noOfSeats;
    this.noOfTires = noOfTires;
    this.bodyColor = bodyColor;
  }
}

class Bike {
  #chassis;
  constructor(chassis, noOfTires, noOfSeats, bodyColor) {
    this.#chassis = chassis;
    this.noOfSeats = noOfSeats;
    this.noOfTires = noOfTires;
    this.bodyColor = bodyColor;
  }
}

class Honda extends Car {
  constructor(chassis, noOfTires, noOfSeats, bodyColor, model, varient) {
    this.model = model;
    this.varient = varient;

    super(chassis, noOfTires, noOfSeats, bodyColor);
  }
}

const City = new Honda("H1.2s", 4, 5, "Black", "2024", "XLI");


// const outputEle = document.getElementsByClassName("output");

// for (let ele of outputEle) {
//   if (ele.localName === "div") continue;
//   ele.innerHTML = "Noor Muhammad";
// }

// const divOutput = document.getElementById("div_output");

// console.log(divOutput);

// document.getElementsByName('h1')

// const outputEle = document.querySelectorAll('div')
// const outputEle = document.querySelector('div')

const outputEl = document.querySelector(".output");
const mainList = outputEl.querySelector("ul");
const divList = outputEl.querySelectorAll("div");

[...outputEl.children].forEach((ele, idx) => {
  const id = idx + 1;
  ele.setAttribute("id", id);
  ele.style.color = id % 2 === 0 ? "blue" : "red";
});


// DOM

// console.log(
//   document.body.children.forest.children.tree2.children.shrubbery.children
//     .treasure
// );

// const treasureEle =
//   document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1];

// treasureEle.innerHTML = "<h1>Noor</h1>";

const treasureEle = document.getElementsByTagName("div");
const jsBtn = document.querySelector("#js-btn");
const forestEle = document.querySelector("#forest");

// jsBtn.addEventListener("click", function reveal(el) {
//   console.log(this.parentElement);
//   //   console.log(el.parentElement);
// });

// jsBtn.style.backgroundColor = "#cccc";
// jsBtn.style.outline = "none";
// jsBtn.style.border = "none";
// jsBtn.style.borderRadius = "5px";
// jsBtn.style.padding = "5px";
// jsBtn.style.cursor = "pointer";

// function toggleBackground() {
//   if (jsBtn.style.visibility === "hidden") {
//     // jsBtn.style.backgroundColor = "blue";
//     jsBtn.style.visibility = "visible";
//     return;
//   }

//   //   jsBtn.style.backgroundColor = "red";
//   jsBtn.style.visibility = "hidden";
// }

// jsBtn.addEventListener("click", toggleBackground);

jsBtn.addEventListener("click", () => jsBtn.classList.toggle("bgRed"));

// jsBtn.setAttribute("type", "submit");

const submitBtn = document.createElement("button");
submitBtn.setAttribute("id", "submit-btn");
submitBtn.innerHTML = "Submit Form";
submitBtn.addEventListener("click", () => console.log("form submitted"));
forestEle.appendChild(submitBtn);
