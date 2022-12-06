/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function solution(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let arrItem = [];
    for (let j = 0; j <= i; j++) {
      j < 1
        ? arrItem.push(str[i].toUpperCase())
        : arrItem.push(str[i].toLowerCase());
    }
    arr.push(arrItem.join(""));
  }
  return arr.join("-");
}
