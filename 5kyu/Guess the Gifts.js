/*
https://www.codewars.com/kata/52ae6b6623b443d9090002c8
You will be given a wishlist (array), containing all possible items. Each item is in the 
format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} 
You also get a list of presents (array), you see under the christmas tree, which have the following 
format each: {size: "small", clatters: "no", weight: "light"}
Your task is to create a list of all possible presents you might get.
Rules
Possible values for size: "small", "medium", "large"
Possible values for clatters: "no", "a bit", "yes"
Possible values for weight: "light", "medium", "heavy"
The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
Don't add any item more than once to the result
The order of names in the returned array doesn't matter
It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes 
of one of the presents, add all of them.
Example
var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];
var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];
guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
*/

const guessGifts = (wishlist, presents) => {
    let gifts = [];
    for (let present of presents) {
        for (let item of wishlist) {
            if (item.size === present.size
                && item.clatters === present.clatters
                && item.weight === present.weight
                && !gifts.includes(item.name)) {
                gifts.push(item.name)
            }
        }
    }
    return gifts;
}

const guessGifts = (wishlist, presents) => wishlist
    .filter(wishlistItem => presents
        .some(present => Object.keys(present)
            .every(key => wishlistItem[key] === present[key])))
    .map(gift => gift.name)