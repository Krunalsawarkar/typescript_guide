function addTwo(num: number) {
  return num + 2;
}

function addTwo2(num: number): number {
  return num + 2;
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let login = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("krunal", "krunal@gmail.in", false);
login("k", "k@k.in");
addTwo(5);
let val = addTwo2(5);

export {};
 