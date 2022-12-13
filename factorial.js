function factorial(n) {
  let result = 1;
  let i = n;
  while(i >= 1){
    result = result * i;
    i--;
  }
  return result;
}

console.log(factorial(3))