class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let arr = str.split(" ");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(arr[i]));
      } else {
        if (noCap.includes(arr[i])) {
          result.push(arr[i]);
        } else {
          result.push(this.capitalize(arr[i]));
        }
      }
    }
    return result.join(" ");
  }
}