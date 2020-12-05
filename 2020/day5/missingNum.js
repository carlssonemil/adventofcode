const missingNum = (arr) => {
  return ((arr.length + 1) * (arr[0] + arr[arr.length - 1]) / 2) - arr.reduce((x, y) => x + y);
}

module.exports = missingNum;