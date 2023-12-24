const array = ["bmw", "ford", "lexus", "gtx", "rtx"]
array.sort();

console.log(array);

const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);