type User = {
  name: string;
  email: string;
  isActive: boolean;
  readonly _id: string;
  creditCardDetails?: number;
};

let myUser: User = {
  name: "Krunal",
  email: "k@gmail.in",
  isActive: false,
  _id: "13256",
};

type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
};




myUser.email = "k@k.com";
// myUser._id = "456987";
