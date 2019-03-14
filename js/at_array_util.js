
export function KeyValDD(key,val) {
 this.value = key;
 this.ddValue = val;
}


export function uniqueObjBy(arr, fn) {
  let unique = {};
  let distinct = [];
  arr.forEach(function (x) {
    let key = fn(x);
    if (!unique[key]) {
      distinct.push(x);
      unique[key] = true;
    }
  });
  return distinct;
}

export function compareByProperty(key) {
    return function (a, b) {
        a = a[key] !== undefined && isNaN(a[key]) ? a[key].toUpperCase() : a[key];
        b = b[key] !== undefined && isNaN(b[key]) ? b[key].toUpperCase() : b[key];
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };
}

