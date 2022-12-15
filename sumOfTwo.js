/*
Create a function that returns the sum of the two lowest numbers given an array of minimum 4 integers.
*/

function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
}
