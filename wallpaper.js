/*
John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he got a headache, so could you help John?

Task
Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.
*/

function wallpaper(l, w, h) {
  numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  if (l > 0 && h > 0 && w > 0) {
    const rollS = 0.52 * 10;
    const wallS = l * h * 2 + w * h * 2;
    const reserve = (wallS / 100) * 15;
    const result = Math.ceil((wallS + reserve) / rollS);
    return numbers[result];
  } else {
    return number[0];
  }
}

wallpaper(6.3, 4.5, 3.29);
