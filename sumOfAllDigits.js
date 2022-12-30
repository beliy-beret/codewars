/*
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function solution(num) {
  let arr = num.toString().split("");
  while (arr.length > 1) {
    arr = arr
      .reduce((acc, i) => acc + Number(i), 0)
      .toString()
      .split("");
  }
  return Number(arr[0]);
}
