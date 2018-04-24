console.log("Hello World!");

let xs = new Array(1, 2, 3)

for (const e of xs)
{
  console.log("Element: " + e);
}

const numbers = {one : 1, two : 2};
numbers["three"] = 3;
numbers.four = 4
console.log(numbers);

const mykeys = Object.keys(numbers);
for (const mykey of mykeys)
{
  console.log(mykey + " -> " + numbers[mykey]);
}

function doSomething(msg)
{
  console.log(msg);
}

const msg = "Hello UW";
doSomething(msg);

function max1(a, b)
{
  if (a > b) return a;
  else return b;
}

console.log(max1(1, 2));

const max2 = (a, b) => 
{
  if (a > b) return a;
  else return b
}

console.log(max2(3, 4))

function printMe(e)
{
  console.log("Element: " + e);
}

xs.forEach(printMe);

// const ys = xs.map((e) => {return e + 1})
const ys = xs.map(e => e + 1);

console.log(ys);

