// encrypt.js
const a = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\$$^_`abcdefghijklmnopqrstuvwxyz{|}~';
const all = [];
let p;
let acc = 0;
let encrypt = (c, changer = 3) => {
  var result = ""; // Function scoped
  for (let i = 0; i < c.length; i++) {
    let current = a.indexOf(c[i])
    if (current !== -1) {
    result += a[(current + changer) % a.length];
    } else {
      result += " ";
    }
  }
  p = result;
  acc += changer;
  all.push(result);
  return result;
}

let decrypt = (c, changer = 3) => {
  var result = ""; // Function scoped
  for (let i = 0; i < c.length; i++) {
    let current = a.indexOf(c[i])
    if (current !== -1) {
    result += a[(current - changer + a.length) % a.length];
    } else {
      result += " ";
    }
  }
  p = result;
  acc -= changer;
  all.push(result);
  return result;
}

// Use encrypt(1,2) or decrypt(1,2)

// First parameter: enter text to decrypt/encrypt
// Second parameter: enter the shift

// Use "p" as parameter 1 to access previous result
// Use "acc" as parameter 2 to access the total accumulation of shifts
// p is overrided each itteration - use "all" to view previous results

// Shift will default to 3 if undefined
