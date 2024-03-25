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
  protected _courseCount = 1;

  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course Count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class subUser extends Users {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 1;
  }
}

const user = new User("k@ks.com", "krunal");
