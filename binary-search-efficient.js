function binarySearchEfficient(searchList, targetValue, start = 0, end) {
    let iterations = 0
    while (start < end) {
        iterations++
        let mid = Math.floor(start + (end - start) / 2);
        if (searchList[mid] === targetValue) return "Element found at position " + mid.toString() + " after " + iterations.toString() + " iterations"
        else if (searchList[mid] > targetValue) end = mid - 1;
        else start = mid + 1;
    }
    return "Element not found"
}

module.exports = binarySearchEfficient;