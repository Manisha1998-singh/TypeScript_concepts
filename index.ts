//Narrowing

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}
const newUser: Admin = {
  name: "Manisha",
  email: "manisha@gmail.com",
  isAdmin: true,
};
console.log(isAdminAccount(newUser));
