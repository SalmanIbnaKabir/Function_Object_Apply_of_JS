// find a largest number 

function findLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
    // 6, 5, 4
  }
  else if (num2 > num1 && num2 > num3) {
    console.log(num2);
    // 9, 10, 5;
  }
  else {
    console.log(num3)
  }
}

findLargest(4, 5, 7);
findLargest(8, 5, 7);
findLargest(48, 50, 7);