//Narrowing

interface User {
  name: string;
  email: string;
}

//instanceof work with classes  and not work with same name interface
class Admin {
  constructor(
    public name: string,
    public email: string,
    public isAdmin: boolean,
  ) {}
}
const manisha = new Admin("Manisha", "abc@gmail.com", true);

if (manisha instanceof Admin) {
  console.log(manisha.name.toUpperCase());
}

const newUser: Admin = {
  name: "Manisha",
  email: "manisha@gmail.com",
  isAdmin: true,
};
