const User = {
  name: "MAnisha",
  email: "mani@gamil.com",
  isActive: true,
};
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
let newUser = { name: "tushar", isPaid: false, email: "m@h.com" };
createUser(newUser);
createUser({ name: "MAnisha", isPaid: false });
function cerateCourse(): { name: string; price: number } {
  return { name: "tushar", price: 3 };
}

export {};
