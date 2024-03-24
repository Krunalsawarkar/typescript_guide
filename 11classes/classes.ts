class User {
  email: string;
  name: string;
  city: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const user = new User("k@ks.com", "krunal");
user.city = "Nagpur ";

export {};
