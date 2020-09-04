module.exports = function reverse (n) {
   let arr = String(n).split("");
   if (arr[0] == "-") arr.shift();
   return +arr.reverse().join("");
}
