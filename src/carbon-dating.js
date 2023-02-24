const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {

  if (typeof(sampleActivity) != 'string') return false
  if (!sampleActivity) return false
  if (!parseInt(sampleActivity)) return false
  if (parseInt(sampleActivity) <= 0) return false
  if (+sampleActivity > MODERN_ACTIVITY) return false
  
  const t = Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693  / HALF_LIFE_PERIOD)

  return Math.ceil(t)
}

console.log(
  dateSample('3.142')
);

// console.log(
//   +'3.142'
// );

module.exports = {
  dateSample
};


