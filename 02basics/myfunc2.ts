const getHello = (s: string): string => {
  return "string";
};

const heros = ["spiderman", "thor", "captain america"];

heros.map((hero) => {
  return `Hero is ${hero}`;
});

const heros2 = [1, 2, 3];

heros2.map((hero) => {
  return `Hero is ${hero}`;
});

function consoleError(errMSg: string): void {
  console.log(errMSg);
}

function handleError(errMSg: string): never {
  throw new Error(errMSg);
}

export {};
