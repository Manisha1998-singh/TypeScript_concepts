function addTwo(num: number): number {
  // num.toUpperCase(); //not allow
  return num + 2;
  //return "hello";
}

// function getValue(val: number): string {
//   if (val > 5) {
//     return true; //error
//   }
//   return "200 Ok";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "Spiderman", "isronman"];
//const heros = [1, 3, 6];

heros.map((hero): string => {
  return `hero is ${hero}`;
  //return 1;
});

console.log("mottuu");
