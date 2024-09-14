export const createFallback = (name: string) =>
  name
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join("");
