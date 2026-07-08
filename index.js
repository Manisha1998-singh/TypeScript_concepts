"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase(); //not allow
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
signUpUser("shilpi", "shilpi@gmail.com", true);
//Arrow function  //default value
let loginUser = (name, email, isPaid = false) => { };
loginUser("Mani", "shilpi@gmail.com"); //added default value thats why not added here
addTwo(4);
console.log("mannu");
console.log(getUpper("mani"));
//# sourceMappingURL=index.js.map