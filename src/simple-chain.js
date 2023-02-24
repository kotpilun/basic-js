const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  str: '',

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    arguments.length == 0 ? this.arr.push(`(  )`) : this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && !(position >= this.arr.length) && !(position <= 0)) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    str = this.arr.join('~~');
    this.arr.length = 0;
    return str;
  }
};


module.exports = {
  chainMaker
};
