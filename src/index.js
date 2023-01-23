const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
// convert the input code to morse code
expr = expr.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
// split the morse code into an array of letters
const codeArray = expr.split("**********");
// create a variable to store the decoded message
let decodedMessage = '';
  // loop through the array of letters
  for (let i = 0; i < codeArray.length; i++) {
    // check if the current letter is a space
    if (codeArray[i] === ' ') {
      decodedMessage += ' ';
    } else {
      // loop through the morse code dictionary
      for (let key in MORSE_TABLE) {
        // check if the current letter matches a value in the dictionary
        if (MORSE_TABLE[key] === codeArray[i]) {
          // add the corresponding key (letter) to the decoded message
          decodedMessage += key;
        }
      }
    }
  }
  // return the decoded message
  return decodedMessage;
}

module.exports = {
    decode
}