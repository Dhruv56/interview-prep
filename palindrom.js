function isPalindrom(n) {
  let rev = 0
  let original = n

  while (original != 0) {
    let lastDigit = Math.floor(original % 10)
    rev = rev * 10 + lastDigit
    original = Math.floor(original / 10)
  }

  console.log(n == rev);
}

isPalindrom(1224)