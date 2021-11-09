//fifth question
let MAX = 10;

function isDigit(ch) {
  if (ch >= "0" && ch <= "9") return true;
  return false;
}

function allDigits(str, len) {
  if (isNaN(str)) {
    return false;
  } else {
    let present = Array.from({ length: MAX }, (_, i) => 0);

    // For every character of the String
    for (let i = 0; i < len; i++) {
      // If the current character is a digit
      if (isDigit(str[i])) {
        t;
        let digit = str[i] - "0";
        present[digit] = true;
      }
    }

    // For every digit from 0 to 9
    for (let i = 0; i < MAX; i++) {
      if (!present[i]) return false;
    }

    return true;
  }
}

let str = "1234567890";
let len = str.length;

if (allDigits(str, len)) {
  console.log("Contains all the digits(0-9)");
  document.write("Contains all digits from(0-9");
} else {
  console.log("It doesn't contains all the digits(0-9)");
  document.write("Contains all digits from(0-9");
}
