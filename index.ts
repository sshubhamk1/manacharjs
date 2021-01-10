function converString(string: String) {
  let newString = "@"; // starting delimeter

  for (let index = 0; index < string.length; index++) {
    newString += "#" + string.substring(index, index + 1);
  }
  newString += "#$"; // ending delimeter

  return newString;
}

export const manachar = (string: String) => {
  let newString = converString(string);

  let buff: number[] = new Array(newString.length);
  for (
    let pos = 0;
    pos < buff.length;
    pos++ // Initially fill all array elements with zero
  ) {
    buff[pos] = 0;
  }

  let currCenter = 0;
  let rightLimit = 0;
  for (let index = 1; index < newString.length - 1; index++) {
    let IMirror: number = currCenter - (index - currCenter);

    if (rightLimit > index) {
      buff[index] = Math.min(rightLimit - index, buff[IMirror]);
    }

    while (
      newString.charAt(index + 1 + buff[index]) ==
      newString.charAt(index - 1 - buff[index])
    ) {
      buff[index]++;
    }

    if (index + buff[index] > rightLimit) {
      currCenter = index;
      rightLimit = index + buff[index];
    }
  }

  let maxPalindrome = 0;
  let centerIndex = 0;

  for (let index = 1; index < newString.length - 1; index++) {
    if (buff[index] > maxPalindrome) {
      maxPalindrome = buff[index];
      centerIndex = index;
    }
  }

  let index = (centerIndex - 1 - maxPalindrome) / 2;
  return string.substring(index, index + maxPalindrome);
};
