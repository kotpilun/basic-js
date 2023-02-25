const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  let additionStr = '';
  if ('repeatTimes' in options) repeatTimes = options.repeatTimes;
  if ('separator' in options) separator = options.separator;
  if ('addition' in options) addition = String(options.addition);
  if ('additionRepeatTimes' in options) additionRepeatTimes = options.additionRepeatTimes;
  if ('additionSeparator' in options) additionSeparator = options.additionSeparator;
  
  const sepLength = separator.length; 
  const addSepLength = additionSeparator.length;
  if (addition != '') {
    additionStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -addSepLength);
  }
  const resStr = `${str}${additionStr}${separator}`.repeat(repeatTimes).slice(0, -sepLength);
  return resStr;
}

// console.log(
//   repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })
// );
// // , 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'


module.exports = {
  repeater
};
