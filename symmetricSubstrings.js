// write a method that:
//  returns and array of substrings which:
//    are palindromes &&
//    in alphabetical order
//    have length > 1


//  tests:
//    'cool' => ['oo']
//    'banana' => ['ana', 'ana', 'anana', 'nan']

//  pseudocode:
//
//    for each pair of chars, check if equal and push result, then check if adjacent chars are equal and push if so
//    for each char check if adjacent chars are equal, if so push resultant substring into results
//    return sorted result array


String.prototype.symmetricSubstrings = function () {
  const result = [];

  const isPalindrome = (str) => str === str.split('').reverse().join('');

  for (let i=1; i < this.length; i++) {
    let min = i - 1;
    let max = i;
    while (min >= 0 && max < this.length) {
      let subStr = this.slice(min, max + 1);
      console.log(subStr);
      if (isPalindrome(subStr)) {
        result.push(subStr);
      }
      min -= 1;
      max += 1;
    }
    min = i - 1;
    max = i + 1;
    while (min >= 0 && max < this.length) {
      let subStr = this.slice(min, max + 1);
      console.log(subStr);
      if (isPalindrome(subStr)) {
        result.push(subStr);
      }
      min -= 1;
      max += 1;
    }
  }
  console.log(result);
  return result.sort();
}
console.log('cool'.symmetricSubstrings());
console.log('banana'.symmetricSubstrings());
