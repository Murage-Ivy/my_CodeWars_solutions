function reverseNumber(n, b){
    n = Number(n)
     b = Number(b)
    let reversed = 0
    if(b === 1) {
      return BigInt(n)
    }
    while(n > 0) {
      reversed = reversed * b + n % b
      n = Math.floor(n / b)
    }
     return BigInt(reversed)
   }

console.log(reverseNumber(5, 1));
