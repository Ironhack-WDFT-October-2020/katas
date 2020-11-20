/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript
You work in the best consumer electronics corporation, and your boss wants to find out which three products 
generate the most revenue. Given 3 lists of the same length like these:
products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).
Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

function top3(products, amounts, prices) {
    const rev = products.map((productName, index) => {
        return {
            name: productName,
            revenue: prices[index] * amounts[index],
            index: index
        }
    })
    const sorted = rev.sort((a, b) => {
        return b.revenue - a.revenue || a.index - b.index
    })
    return sorted.slice(0, 3).map(product => {
        return product.name
    })
}

// little bit more efficient
function top3(products, amounts, prices) {
    const rev = products.map((val, i) => {
        return prices[i] * amounts[i]
    });
    const top3 = [];
    for (let i = 0; i < 3; i++) {
        top3.push(products[rev.indexOf(Math.max(...rev))]);
        rev[rev.indexOf(Math.max(...rev))] = - 1;
    }
    return top3
}