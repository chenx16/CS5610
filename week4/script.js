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
