/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b
*/

function solution(a, b) {
  const arr = [];
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, item) => acc + item, 0);
}
