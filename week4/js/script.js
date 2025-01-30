console.log("Powers of 2 using for loop:");
for (let i = 2; i <= 1024; i *= 2) {
  console.log(i);
}

console.log("Powers of 2 using while loop:");
let num = 2;
while (num <= 1024) {
  console.log(num);
  num *= 2;
}

let userName;

do {
  userName = prompt("Please enter your name:");

  // Check if the input is a number or a single character
} while (!userName || userName.length === 1 || !isNaN(userName));

alert(`Welcome, ${userName}!`);

function calculateTotalPrice(billAmount, taxRate = 0.12, tipRate = 0.15) {
  let taxAmount = billAmount * taxRate;
  let tipAmount = billAmount * tipRate;
  return billAmount + taxAmount + tipAmount;
}


function logTotalPrice(calculationFunction, billAmount) {
  let total = calculationFunction(billAmount);
  console.log(`Total Price: $${total.toFixed(2)}`);
}


// Test 1: Default tax and tip rates
let billAmount1 = 100;
let totalPrice1 = calculateTotalPrice(billAmount1);
console.log(`For a bill of $${billAmount1}, the total price including tax and tip is: $${totalPrice1.toFixed(2)}`);

// Test 2: Custom tax and tip rates
let billAmount2 = 200;
let customTaxRate = 0.10;
let customTipRate = 0.18;

let totalPrice2 = calculateTotalPrice(billAmount2, customTaxRate, customTipRate);
console.log(`For a bill of $${billAmount2}, with a tax rate of ${customTaxRate * 100}% and a tip rate of ${customTipRate * 100}%, the total price is: $${totalPrice2.toFixed(2)}`);

let students = [
  { name: "Cristian", age: 30, location: "Vancouver" },
  { name: "James", age: 40, location: "Toronto" },
  { name: "Garry", age: 20, location: "Vancouver" }
];

function findStudentsInVancouver(students) {
  return students.filter(student => student.location === "Vancouver");
}

function findStudentsAbove30(students) {
  return students.filter(student => student.age >= 30);
}

console.log("Students in Vancouver:");
console.log(findStudentsInVancouver(students));

console.log("Students aged 30+:");
console.log(findStudentsAbove30(students));
