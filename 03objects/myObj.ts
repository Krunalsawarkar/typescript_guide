function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Krunal", isPaid: true, email: "k@k.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 100 };
}

export {};
