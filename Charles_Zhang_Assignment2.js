// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// ES6 Arrow Func with map method, returns a new array
const doubleQandP = itemsObject.map((item) => ({
  quantity: item.quantity * 2,
  price: item.price * 2,
}));
console.log("result is: \n", doubleQandP);

// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const filterItems = itemsObject.filter(
  (item) => item.quantity > 2 && item.price > 300
);
console.log("result is: \n", filterItems);

// Given the array, implement a function to calculate the total value of the items.
const totalPrice = itemsObject.reduce(function (acc, item) {
  return acc + item.quantity * item.price;
}, 0);
console.log("result is: \n", totalPrice);

// ● Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const string =
  "  Perhaps The Easiest-to-understand    Case    For Reduce Is   To Return The Sum Of   All The Elements In   An Array   ";

const newStr = (str) => {
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

// Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
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

const merge = first
  .concat(second)
  .reduce(
    (acc, curr) => [
      ...acc,
      {
        uuid: curr.uuid,
        name: curr.name || null,
        role: curr.role || null,
      },
    ],
    []
  )
  .sort((a, b) => (a.uuid > b.uuid ? 1 : -1));
console.log("result is: \n", merge);
