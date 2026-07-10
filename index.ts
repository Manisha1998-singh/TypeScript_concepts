//Interface

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId: string;
  //startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const manisha: User = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  googleId: "h@h.com",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "manisha") => {
    return 10;
  },
};
manisha.email = "h@h.com";
interface USer {
  githubToken: string;
}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
const manisha1: Admin = {
  role: "admin",
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  googleId: "h@h.com",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "manisha") => {
    return 10;
  },
};
