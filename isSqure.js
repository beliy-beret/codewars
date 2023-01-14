const isSquare = function(n){
  return Math.sqrt(n) === Math.trunc(Math.sqrt(n)) ? true : false
}

const isSquare1 = (n) => {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare2 = (n) => {
  return Number.isInteger(Math.sqrt(n));
}