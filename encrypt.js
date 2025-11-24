const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const all = [];
let p;
let encrypt = (c, changer = 3) => {
  var result = ""; // Function scoped
  for (let i = 0; i < c.length; i++) {
    let current = a.indexOf(c[i])
    if (a[current] != undefined) {
    result += (a[current += changer]);
    } else {
      result += " ";
    }
  }
  p = result;
  all.push(result);
  return result;
}

let decrypt = (c, changer = 3) => {
  var result = ""; // Function scoped
  for (let i = 0; i < c.length; i++) {
    let current = a.indexOf(c[i])
    if (a[current] != undefined) {
    result += (a[current -= changer]);
    } else {
      result += " ";
    }
  }
  p = result;
  all.push(result);
  return result;
}

// Use encrypt(1,2) or decrypt(1,2)

// First parameter: enter text to decrypt/encrypt
// Second parameter: enter the shift

// Use "p" as parameter 1 to access previous result
// p is overrided each itteration - use "all" to view previous results

// Shift will default to 3 if undefined
