/*
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

function isAnagram(str1, str2) {
  return (
    JSON.stringify(str1.toLowerCase().split("").sort()) ===
    JSON.stringify(str2.toLowerCase().split("").sort())
  );
}
