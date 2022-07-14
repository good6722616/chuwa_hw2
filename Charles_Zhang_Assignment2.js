// 1. Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const doubleQandP = itemsObject.map((item) => ({
  quantity: item.quantity * 2,
  price: item.price * 2,
}));
console.log("Question 1 result is: \n", doubleQandP);

// 2. Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const filterItems = itemsObject.filter(
  (item) => item.quantity > 2 && item.price > 300
);
console.log("Question 2 part1 result is: \n", filterItems);

// Given the array, implement a function to calculate the total value of the items.
const totalPrice = itemsObject.reduce(function (acc, item) {
  return acc + item.quantity * item.price;
}, 0);
console.log("Question 2 part2 result is: \n", totalPrice);

// Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const string =
  "  Perhaps The Easiest-to-understand    Case    For Reduce Is   To Return The Sum Of   All The Elements In   An Array   ";
const newStr = (str) => {
  return str.replace(/-|\s+/g, " ").trim().toLowerCase();
};
console.log(
  "Question 3 result is: \n",
  newStr(string).charAt(0).toUpperCase() + newStr(string).slice(1).toLowerCase()
);
/* const newStr = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++)
    if (str[i].match(/[a-z,' ',-]/gi)) {
      res += str[i];
    }

  res = res.replace(/-|\s+/g, " ").trim();
  res = res.charAt(0).toUpperCase() + res.slice(1).toLowerCase();
  return res;
};

let res = newStr(string);
console.log("result is: \n", res);
 */
// 3. Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

//method Using Map
const merge = (first, second) => {
  const res = new Map();
  [...first, ...second].forEach((item) => {
    res.set(item.uuid, {
      name:
        (res.has(item.uuid) && res.get(item.uuid).name) || item.name || null,
      role:
        (res.has(item.uuid) && res.get(item.uuid).role) || item.role || null,
    });
  });
  const sortedArr = Array.from(res, ([uuid, rest]) => ({ uuid, ...rest })).sort(
    (a, b) => a.uuid - b.uuid
  );
  return sortedArr;
};
console.log("Question 4 result is: \n", merge(first, second));
