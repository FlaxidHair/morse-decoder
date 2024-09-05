const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    let letterRes = expr.slice(i, i + 10);
    if (letterRes === "**********") {
      result += " ";
      continue;
    }
    let morseLetter = "";

    for (let j = 0; j < letterRes.length; j += 2) {
      let symb = letterRes.slice(j, j + 2);
      if (symb === "10") {
        morseLetter += ".";
      }
      if (symb === "11") {
        morseLetter += "-";
      }
    }
    result += MORSE_TABLE[morseLetter];
  }
  return result;
}

module.exports = {
  decode,
};
