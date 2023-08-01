const algorithm = require('./binarySearch')

const searchList = [1, 2, 3, 4, 5, 6, 7, 8, 900, 1000];
const target = 8;

console.log(algorithm(searchList, target, 0, searchList.length) ? "Element exists" : "Element does not exist");