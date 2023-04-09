/**
* * Find all the possible sets from a given string
* * I/P = "abc"
* * O/P = "", "a", "b", "c", "ab", "ac", "bc", "abc"
* * For every string there is 2ⁿ possible sets where n is the number of characters
* */

function set(str) {
  let n = str.length
  let sets = Math.pow(2, n)

  for (let i = 0; i < sets; i++) {
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        console.log(str[j]);
      }
    }
    console.log("------");
  }
}

console.log(set("abc"));