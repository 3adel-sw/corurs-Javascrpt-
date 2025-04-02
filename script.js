// /*
//  Constructor Function
//   - Deal With Properties And Methods
//   150
// */

// // class User {
// //   constructor(id, username, salary) {
// //     // Properties
// //     this.id = id;
// //     this.u = username || "Unknown";
// //     this.s = salary < 5000 ? salary + 500 : salary;
// //     this.msg = function () {
// //       return `Hello ${this.u} your salary is ${this.s}`;
// //     };
// //   }
// //   // Methods
// //   writeMsg() {
// //     return `Hello ${this.u} your salary is ${this.s}`;
// //   }
// // }

// // let userOne = new User(100, "Adel", 4000);
// // let userTow = new User(101, "", 5000);

// // console.log(userOne.u);
// // console.log(userOne.s);
// // console.log(userOne.msg());
// // console.log(userOne.writeMsg());

// // console.log(userTow.u);
// // console.log(userTow.s);
// // console.log(userTow.msg); // Native Code
// // console.log(userTow.writeMsg); // Native Code

// function randomText() {
//   var text = "!@#$%^&*()";
//   letters = text[Math.floor(Math.random() * text.length)];
//   return letters;
// }

// function rain() {
//   let cloud = document.querySelector(".cloud");
//   let e = document.createElement("div");
//   e.classList.add("drop");
//   cloud.appendChild(e);

//   let left = Math.floor(Math.random() * 300);
//   let size = Math.random() * 1.5;
//   let duration = Math.random() * 1;

//   e.innerText = randomText();
//   e.style.left = left * "px";
//   e.style.sontSize = 0.5 + size + "em";
//   e.style.animathionDuration = 1 + duration + "s";

//   setTimeout(function () {
//     cloud.removeChild(e);
//   });
// }
// setInterval(function () {
//   rain();
// }, 20);
// // The Cloud Effect Completes Here
