//Class
class User {
  email: string;
  name: string;
  readonly city: string = "jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const manisha = new User("h@h.com", "mannu");
//manisha.city = "jaipur"; // error it readonly
