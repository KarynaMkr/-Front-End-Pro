const utils = {
  reverse: function reverse (source) {
    if (Array.isArray(source)) {
      let newArray = [];
    for (let i = 0; i < source.length; i++) {
      newArray[i] = source[(source.length - 1) - i]
    }
    return newArray;

    } else if (typeof(source) === 'string') {
      let newString = '';
    for (let i = source.length - 1; i >= 0; i--) {
      newString += source[i]
    }
    return newString;
    }
  },

  verifyNumber: function verifyNumbers (source) {
      let numArray = [];
      for (let item of source) {
        if (typeof item === 'number' && !isNaN(item)) {
          numArray[numArray.length] = item;
        }
      }
      return numArray;
    },

  getMin: function getMin (source) {
    let minimum = source[0];
      for (let i = 0; i < source.length; i++) {
          if (source[i] < minimum && !isNaN(source[i]) && source[i] !== null)  {
            minimum = source[i];
          }
      }
      return minimum;
  },

  getAverage: function getAverage (source) {
    let sum = 0;
      for (let i = 0; i < source.length; i++) { 
        if (source.length === 0 || typeof source[i] === 'string') {
          return console.log('array empty or have string item, change it'); 
        } else {
          sum += source[i];
          }
      }
          return sum / source.length;
  },
};








 // ---------- REVERSE ------------

  // let source = [1, 14, 'hello', true, 54422]; // array
  // let source = 'hello, user';                 // string

  // console.log(source);
  // console.log(utils.reverse(source));

  // ---------- VERIFY NUMBER ------------

  // let source = [1, 14, 'hello', true, 54422, NaN, '14565', null];

  // console.log(source);
  // console.log(utils.verifyNumber(source));

  // ---------- GET MIN NUMBER ------------

  // let source = [1, 14, 13, 54422, NaN, null, 0, -7];
  // console.log(source);
  // console.log(utils.getMin(source));

  // ---------- GET AVERAGE ------------

  // let source = [1, 3, 6, 8];

  // console.log(source);
  // console.log(utils.getAverage(source));



