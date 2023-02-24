const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!members) return false;
  if (members.length == 0) return false;

  str = '';
  // members.sort();

  for (i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string') continue;
    str += members[i].trim()[0].toUpperCase();
  }

  let resStr = str.split('')
        .sort()
        .join('')

  return resStr;
}

// console.log(
//   null ? true :false
// );

module.exports = {
  createDreamTeam
};
