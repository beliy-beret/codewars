function solution(string) {
  const arr = string.split(" ");
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}
