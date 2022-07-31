module.exports = function toReadable (number) {
  let hundreds = Math.floor(number/100);
  let tens = Math.floor((number - hundreds*100)/10);
  let units = Math.floor(number - hundreds*100 - tens*10);
  let str = "";

  if(hundreds === 0 && tens === 0 && units === 0)
    return "zero";
    
  if (hundreds > 0) {
    if (hundreds === 1)
      str += "one";
    if (hundreds === 2)
      str += "two";
    if (hundreds === 3)
      str += "three";
    if (hundreds === 4)
      str += "four";
    if (hundreds === 5)
      str += "five";
    if (hundreds === 6)
      str += "six";
    if (hundreds === 7)
      str += "seven";
    if (hundreds === 8)
      str += "eight";
    if (hundreds === 9)
      str += "nine";
    if (hundreds > 9)
      str += String(hundreds);
    str += " hundred";
    if (tens > 0 || units > 0)
      str += " ";
  }

  if (tens > 0) {
    if (tens === 1 && units === 0)
      str += "ten";
    if (tens === 1 && units === 1)
      str += "eleven";
    if (tens === 1 && units === 2)
      str += "twelve";
    if (tens === 1 && units === 3)
      str += "thirteen";
    if (tens === 1 && units === 4)
      str += "fourteen";
    if (tens === 1 && units === 5)
      str += "fifteen";
    if (tens === 1 && units === 6)
      str += "sixteen";
    if (tens === 1 && units === 7)
      str += "seventeen";
    if (tens === 1 && units === 8)
      str += "eighteen";
    if (tens === 1 && units === 9)
      str += "nineteen";
    if (tens === 2)
      str += "twenty";
    if (tens === 3)
      str += "thirty";
    if (tens === 4)
      str += "forty";
    if (tens === 5)
      str += "fifty";
    if (tens === 6)
      str += "sixty";
    if (tens === 7)
      str += "seventy";
    if (tens === 8)
      str += "eighty";
    if (tens === 9)
      str += "ninety";
    if (tens > 1 && units > 0)
      str += " ";
  }
  if (tens !== 1 && units === 1)
    str += "one";
  if (tens !== 1 && units === 2)
    str += "two";
  if (tens !== 1 && units === 3)
    str += "three";
  if (tens !== 1 && units === 4)
    str += "four";
  if (tens !== 1 && units === 5)
    str += "five";
  if (tens !== 1 && units === 6)
    str += "six";
  if (tens !== 1 && units === 7)
    str += "seven";
  if (tens !== 1 && units === 8)
    str += "eight";
  if (tens !== 1 && units === 9)
    str += "nine";

  return str;
}
