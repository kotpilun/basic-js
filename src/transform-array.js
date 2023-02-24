const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  
//   const controlSeq = arr.find(item => typeof(item)  === 'string');
//   const index = arr.indexOf(controlSeq);
//   const resArr =[];

//   if (controlSeq === '--discard-next') {
//     for (i = 0; i < arr.length; i++) {
//       if (i === index || i === index + 1) {
//         continue;
//       }  else {
//         resArr.push(arr[i])
//       }
//     }
//   }

//   if (controlSeq === '--discard-prev') {
//     for (i = 0; i < arr.length; i++) {
//       if (i === index || i === index - 1) {
//         continue;
//       }  else {
//         resArr.push(arr[i]);
//       }
//     }
//   }

//   if (controlSeq === '--double-next') {
//     for (i = 0; i < arr.length; i++) {
//       if (i === index) {
//         if (i === arr.length - 1) {
//           continue;
//         } else {
//           resArr.push(arr[i + 1]);
//         }
//       }  else {
//         resArr.push(arr[i]);
//       }
//     }
//   }

//   if (controlSeq === '--double-prev') {
//     for (i = 0; i < arr.length; i++) {
//       if (i === index) {
//         if (i === 0) {
//           continue;
//         } else {
//           resArr.push(arr[i - 1]);
//         }
//       }  else {
//         resArr.push(arr[i]);
//       }
//     }
//   }

//   return(resArr)
// }

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const resArr = [];
  const arrCopy = arr.slice();

  for (i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === '--discard-next') {
      i++;
      arrCopy[i] = 'del';
      continue;
    } 
    if (arrCopy[i] === '--discard-prev') {
      if (arrCopy[i - 1] === 'del') {
        continue;
      } else {
        resArr.pop(arrCopy[i - 1]);
        continue;
      };
    } 
    if (arrCopy[i] === '--double-next') {
      if (i === arrCopy.length - 1) {
          break;
        } else {
          resArr.push(arrCopy[i + 1]);
          continue;
        }
    }
    if (arrCopy[i] === '--double-prev') {
      if (i === 0) {
          continue;
        } else if (arrCopy[i - 1] === 'del') {
          continue;
        } else {
          resArr.push(arrCopy[i - 1]);
          i++;
        }
    }
    resArr.push(arrCopy[i])
  }

  return resArr;
}

// console.log(
//   transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])
// );


module.exports = {
  transform
};