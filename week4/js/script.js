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
