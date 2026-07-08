//Some function never return a value
function consoleError(errmsg: string): void {
  console.log(errmsg);
  //return 1;
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
