import { parse } from "@std/csv";

const data = parse(
  await Deno.readTextFile(`${import.meta.dirname}/inputs/input.txt`),
  {
    separator: "   ",
  },
) as [string, string][];

const list1 = [] as number[];
const list2 = [] as number[];

for (const [first, second] of data) {
  list1.push(Number(first));
  list2.push(Number(second));
}

list1.sort();
list2.sort();

let total = 0;

for (let index = 0; index < list1.length; index++) {
  const location1 = list1[index];
  const location2 = list2[index];

  const delta = Math.abs(location2 - location1);
  total += delta;
}

console.log(total);
