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
