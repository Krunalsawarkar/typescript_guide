interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const user: Admin = {
  dbId: 22,
  email: "k@ks.com",
  userId: 5656,
  githubToken: "564iko",
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Tasty50") => {
    return 10;
  },
};

export {};
