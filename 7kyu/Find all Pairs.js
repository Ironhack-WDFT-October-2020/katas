/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
You are given array of integers, your task will be to count all pairs in that array and return their count.
Notes:
Array can be empty or contain only one value; in this case return 0
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

// we create a new array - for each number we check if that number is in the array
// if not we put in in there, if it is we remove it and count a pair
function duplicates(array) {
    let double = []
    let pairs = 0
    for (let number of array) {
        if (double[number] != number) {
            double[numbe] = number
        } else {
            double[number] = undefined
            pairs++
        }
    }
    return pairs
}

function duplicates(array) {
    // sort the array
    array.sort(function (a, b) {
        return b - a
    })
    let pairs = 0;
    for (let i = 0; i < array.length; i++) {
        // check if the following number is the same -> we found a pair 
        if (array[i] === array[i + 1]) {
            pairs++;
            // if we found a pair we have to jump by one -> setting the index to a position after the pair
            i++;
        }
    }
    return pairs;
}