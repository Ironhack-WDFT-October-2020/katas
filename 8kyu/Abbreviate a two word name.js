/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(name) {
    // get first letter -> name[0]
    // put a full stop between the letters
    return `${name[0].toUpperCase()}.${name[name.indexOf(' ') + 1].toUpperCase()}`
    // name[the index of the letter after the space]
}