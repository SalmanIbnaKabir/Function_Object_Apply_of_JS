// [1, 2, 3, 4, 5, 6, 7, 8, 9]

function oddEvenSum(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenSum = evenSum + arr[i]
    }
    else {
      oddSum = oddSum = arr[i];
    }
  }
  console.log('even sum :', evenSum, 'odd sum:', oddSum)
  return { oddSum, evenSum };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
console.log('sum', oddEvenSum(arr))