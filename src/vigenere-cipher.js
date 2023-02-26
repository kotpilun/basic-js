const { NotImplementedError } = require('../extensions/index.js');


class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.resStr = undefined;
  }

  encrypt(message, key) {
    this.resStr = '';
    if (message == undefined || key == undefined) {throw new Error('Incorrect arguments!')};
    const spaces = this.getSpaces(message);
    const matrix = this.getMatrix(this.alphabet);

    message = message.replace(/\s/g, "");
    if (message.length != key.length) {key = this.getGeneratedKey(message, key)};

    for (let i = 0; i < key.length; i++) {
      const rowIndex = this.alphabet.indexOf(key[i].toUpperCase());
      const colIndex = this.alphabet.indexOf(message[i].toUpperCase());
      if (colIndex === -1) {
        this.resStr = this.resStr.concat(message[i]);
      } else {
        this.resStr = this.resStr.concat(matrix[rowIndex][colIndex]);
      }
    }
    this.resStr = this.retrunSpaces(this.resStr, spaces);

    return this.direct ? this.resStr : this.resStr.split('').reverse().join('');
  }
  decrypt(message, key) {
    this.resStr = '';
    if (message == undefined || key == undefined) {throw new Error('Incorrect arguments!')};
    const spaces = this.getSpaces(message);
    const matrix = this.getMatrix(this.alphabet);

    message = message.replace(/\s/g, "");
    if (message.length != key.length) {key = this.getGeneratedKey(message, key)};

    for (let i = 0; i < key.length; i++) {
      const rowIndex = this.alphabet.indexOf(key[i].toUpperCase());
      const colIndex = matrix[rowIndex].indexOf(message[i].toUpperCase());
      if (colIndex === -1) {
        this.resStr = this.resStr.concat(message[i]);
      } else {
        this.resStr = this.resStr.concat(this.alphabet[colIndex]);
      }
    }
    this.resStr = this.retrunSpaces(this.resStr, spaces);

    return this.direct ? this.resStr : this.resStr.split('').reverse().join('');
  }
  getSpaces(message) {
    const spaces = [];
    for (let i = 0; i < message.length; i++) {
      if(message[i] == ' ') {
        spaces.push(i);
      }
    }
    return spaces;
  }
  retrunSpaces(str, arr) {
    for (let i = 0; i < arr.length; i++) {
      str = str.split('');
      str.splice(arr[i], 0, ' ');
      str = str.join('');
    }
    return str;
  }
  getGeneratedKey(message, key) {
    if (message.length < key.length) {
      key = key.slice(0, message.length - key.length);
    } else {
        key = key.concat(key.repeat(Math.ceil(message.length / key.length)));
      if (message.length == key.length) {
        return key;
      } else {
        key = key.slice(0, message.length - key.length);
      }
    }
    return key;
  }
  getMatrix(alphabet) {
    const matrix = [];
    for (let i = 0; i < alphabet.length; i++) {
        matrix[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
    }
    return matrix;
  }
}

// const directMachine = new VigenereCipheringMachine();
// console.log(
//   directMachine.encrypt('attack at dawn!', 'alphonse') 
  
// );
// console.log(
//   directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey')

// );

module.exports = {
  VigenereCipheringMachine
};
