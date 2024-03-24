let score: number | string = 33;

score = "33";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  userid: number;
};

let userType: User | Admin = { name: "krunal", id: 356 };

userType = { username: "iamkrunal68", userid: 52 };

function getDbId(id: number | string) {
  //some api calls
  console.log(`Db id is ${id}`);
}

getDbId(67);
getDbId("none");

function getId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: Array<number> = [1, 2, 3];
const data2: Array<string> = ["1", "2", "3"];
const data3: (number | string | boolean)[] = ["1", "2", 3, false];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"

export {};
