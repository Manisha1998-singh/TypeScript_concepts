//Array way -1

const superArray: string[] = [];

//Array way - 2

const childArray: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};
const allUsers: User[] = [];
allUsers.push({ name: "mannu", isActive: true });

console.log(superArray.push("Spiderman"));
console.log(childArray.push(5));
console.log(childArray);
console.log(superArray);
console.log(allUsers);
