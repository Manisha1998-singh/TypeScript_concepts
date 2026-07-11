//Getters and setters
class User {
  protected _courseCount = 1;
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string,
    //private userId: string,
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("check error ");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
const manisha = new User("h@h.com", "mannu");
//manisha.city = "jaipur"; // error it readonly
