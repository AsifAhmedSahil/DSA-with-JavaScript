function armstrogNumber(n) {
  let num = n;
  let total = 0;
  let numberOfDigit = String(n).length;

  while (num > 0) {
    let lastDigit = num % 10;
    total = total + lastDigit ** numberOfDigit;
    num = Math.floor(num / 10);
  }

  return total === n;
}

console.log(armstrogNumber(153));
// serial