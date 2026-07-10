//Tuples

let tUser: [string, number, boolean];
//tUser = [ 7, "4",  6, true]; //error
tUser = ["4", 6, true]; //error enter the same data type order
console.log(tUser);
//let newUser: tUser = ["5", 6, 9]; //not allowed
type nUser = [string, number, boolean];
const newUser: nUser = ["5", 6, true];
newUser[0] = "mannu"; // allowed
newUser.push(true); //allow
console.log(newUser);
