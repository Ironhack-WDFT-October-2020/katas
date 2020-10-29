/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
Your task is to sum the differences between consecutive pairs in the array in descending order.
For example: sumOfDifferences([2, 1, 10]) Returns 9
Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0.
*/

function sumOfDifferences(arr) {
    let result = 0;
    const sorted = arr.sort(function (a, b) {
        return b - a
    })
    for (let i = 0; i < sorted.length - 1; i++) {
        result += sorted[i] - sorted[i + 1]
    }
    return result
}

function sumOfDifferences(arr) {
    if (arr.length === 0) return 0
    return Math.max(...arr) - Math.min(...arr)
}