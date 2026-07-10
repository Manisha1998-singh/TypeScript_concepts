//Class
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string,
    //private userId: string,
  ) {
    //this.email = email;
    //this.name = name;
  }
}

const manisha = new User("h@h.com", "mannu");
//manisha.city = "jaipur"; // error it readonly
