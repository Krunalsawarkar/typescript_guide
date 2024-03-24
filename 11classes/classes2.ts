class User {
  public email: string;
  private name: string;
  readonly city: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city;
  }
}

class Users {
  private _courseCount = 1;

  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
}

const user = new User("k@ks.com", "krunal");
