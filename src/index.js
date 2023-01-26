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
    let decodedWords = [];
    let currentWord = '';
    let spaces = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '0') {
            currentWord += '.';
        } else if (expr[i] === '1') {
            currentWord += '-';
        } else if (expr[i] === '*') {
            spaces++;
            if (currentWord.length > 0) {
                decodedWords.push(MORSE_TABLE[currentWord]);
                currentWord = '';
            }
            if (spaces > 1 && i !== expr.length - 1) {
                decodedWords.push();
                spaces = 0;
            }
        }
    }
    if (currentWord.length > 0) {
        decodedWords.push(MORSE_TABLE[currentWord]);
    }
    return decodedWords.join(' ');
}

module.exports = {
    decode
}


