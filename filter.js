/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

function solution(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function filter(arr) {
  return arr.filter((item) => typeof item === "number");
}
