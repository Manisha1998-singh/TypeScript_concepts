type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number; //optional
};

let myUser: User = {
  _id: "1234",
  name: "m",
  email: "m@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  }; // Use for combine

myUser.email = "hm@gmail.com";
//myUser._id = "asa"; // not allowed
console.log(myUser.email);
