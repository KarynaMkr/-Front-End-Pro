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

  }

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




  // }

  // ---------- REVERSE ARRAY ------------

  // function reverseArray (source) {
  //   let newArray = [];
  //   for (let i = 0; i < source.length; i++) {
  //     newArray[i] = source[(source.length - 1) - i]
  //   }
  //   return newArray;
  // }

  // let array = [1, 14, 'hello', true, 54422];
  // let source1 = array;

  // console.log(source);
  // console.log(reverseArray(source));


  // ---------- REVERSE STRING ------------ 


  // function reverseString (source) {
  //   let newString = '';
  //   for (let i = source.length - 1; i >= 0; i--) {
  //     newString += source[i]
  //   }
  //   return newString;
  // }

  // let string = 'hello';
  // let source = string;

  // console.log(source);
  // console.log(reverseString(source));

  // ---------- ONLY NUMBERS ------------

  //   function verifyNumbers (sourse) {
  //     let numArray = [];
  //     for (let item of sourse) {
  //       if (typeof item === 'number') {
  //         numArray[numArray.length] = item;
  //       }
  //     }
  //     return numArray;
  //   };

  // let array = [1, 14, 'hello', true, 54422];
  // let source = array;

  // console.log(source);
  // console.log(verifyNumbers(source));

    // ---------- MIN NUMBER ------------

  // function getMin (source) {
    
  // }  


