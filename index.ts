//Union

let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  name: string;
  id: number;
};

let mannu: User | Admin = { name: "Tisha", id: 33 };

mannu = { name: "hc", id: 335 };

function getDbId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  }
}
getDbId("manii");

//both type array

const data: number[] = [1, 2, 4, 5];
const data1: string[] = ["1", "4", "5"];
const data3: (string | number | boolean)[] = ["1", "4", "5", 6, true];
console.log(data3);

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
//seatAllotment = "crew"; fixed value not allowed
