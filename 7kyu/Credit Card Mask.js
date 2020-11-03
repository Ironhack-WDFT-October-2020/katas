/*
https://www.codewars.com/kata/5412509bd436bd33920011bc
Usually when you buy something, you're asked whether your credit card number, phone number or answer to 
your most secret question is still correct. However, since someone could look over your shoulder, you 
don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

function maskify(cc) {
    let masked = "";
    for (let i = 0; i < cc.length; i++) {
        if (i < cc.length - 4) {
            masked = masked + "#";
        } else {
            masked = masked + cc.charAt(i);
        };
    }
    return masked;
}

function maskify(cc) {
    let splitString = cc.split("");
    let reverseArray = splitString.reverse();
    for (i = 4; i < reverseArray.length; i++) {
        reverseArray[i] = "#";
    }
    let newArray = reverseArray.reverse();
    return newArray.join("");
}

function maskify(cc) {
    return (cc.substring(cc.length - 4)).padStart(cc.length, '#');
}

function maskify(cc) {
    if (cc.length < 5) return cc;
    return '#'.repeat(cc.length - 4) + cc.slice(- 4);
}

function maskify(cc) {
    let array = cc.split('');
    let numbers = array.splice(0, array.length - 4);
    let hashes = numbers.map(function () {
        return '#'
    }).join('')
    return `${hashes}${array.join('')}`;
}