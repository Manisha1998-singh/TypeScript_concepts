function addTwo(num: number) {
  // num.toUpperCase(); //not allow
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("shilpi", "shilpi@gmail.com", true);

//Arrow function  //default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Mani", "shilpi@gmail.com"); //added default value thats why not added here
addTwo(4);
//getUpper(5); //error

export {};
console.log("mannu");
console.log(getUpper("mani"));
