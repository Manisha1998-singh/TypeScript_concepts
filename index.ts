//Narrowing

function detectType(val: number | string) {
  // return val.toLowerCase();
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val + 3;
}

function provildId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLocaleLowerCase();
}
