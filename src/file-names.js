const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];
  let count = 0;
  names.forEach(e => {
    if (!arr.includes(e)) {
      arr.push(e);
    } else {
      count = arr.reduce((acc, cur) => {
        if (cur.match(/\(.\)$/g)) {
          acc += 1;
        };
        return acc;
      }, 0);

      if (count > 0) {
        arr.push(`${e}(${count})`);
      } else {
        arr.push(`${e}(${count + 1})`);
      }
      count = 0;
    };
  });
  return arr;
}

console.log(
  renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])
);
//['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'])

module.exports = {
  renameFiles
};


