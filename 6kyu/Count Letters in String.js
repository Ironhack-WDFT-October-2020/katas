/*
https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash
with 'letter' as key and count as 'value'.
Example:
letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
*/

const letterCount = s => {
    let counts = {};
    s.split('').forEach((i) => (counts[i] = (counts[i]) ? ++counts[i] : 1));
    return counts;
}

// using reduce
const letterCount = (s) =>
    s.split('').reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});