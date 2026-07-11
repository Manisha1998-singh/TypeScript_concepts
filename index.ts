//Genrics

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(5);
function identityFive<T>(val: T): T {
  return val;
}
interface Bootle {
  brand: string;
  types: number;
}
identityFive<Bootle>({ brand: "Tum", types: 5 });
console.log(identityFive(5));

function getSearchProduct<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex]!;
}
getSearchProduct([5]);
const getMoreSearchProduct = <T>(products: T[]): T => {
  const myIndex = 5;
  return products[myIndex]!;
};
