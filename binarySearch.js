function binarySearch(searchList, targetValue, start, end) {
    if (start > end) return false;
    let mid = Math.floor(start + (end - start) / 2);
    if (searchList[mid] === targetValue) return true;
    if (searchList[mid] > targetValue) binarySearch(searchList, targetValue, start, mid - 1);
    else return binarySearch(searchList, targetValue, mid + 1, end)
}

module.exports = binarySearch;