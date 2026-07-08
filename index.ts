let message: string = "Hello TypeScript";
console.log(message);
//message = 10; // provide safety
console.log(message);

//Number
let UserId = 3336.7;
//UserId= "mannu" auto show error

UserId.toFixed();

// boolean
let isLogin: boolean = false;

//  any

let hero: string;
function getHero() {
  return "thor";
}
//hero: any; // not check the type
hero = getHero();

export {};
