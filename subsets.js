function subsets(arr) {  //[1,2] | [1] | []
  // base case
  console.log('-----------');
  if (!arr.length) return [[]];
  const last = arr.pop(); //2 | 1
  console.log(last);

  // recursive call, get the subsets for the array which is one element smaller
  const subs = subsets(arr); //[1] | []

  // for each subset in the previous set, push on the element we initially removed
  // then concat this new set with the set from the recursive call
  const result = subs.concat(subs.map((el) => { // [[], ]
    let newArr = el.slice(0);
    newArr.push(last);
    console.log(newArr);
    return newArr;
  }));
  console.log(result);
  return result;
}

// console.log(subsets([1,2,3,4]));
console.log(subsets([1,2]));
