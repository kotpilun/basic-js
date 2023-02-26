const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  
  domains.forEach(e => {
    const arr = e.split('.');
    arr.reverse();
    let str = '';
    arr.forEach(elem => {
        str += `.${elem}`;
        if (str in obj) {
          obj[str] += 1;
        } else {
          obj[str] = 1;
        }
    })
  })
  return obj;
}

// console.log(
//   getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
// );

module.exports = {
  getDNSStats
};
