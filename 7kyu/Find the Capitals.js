/*
https://www.codewars.com/kata/53573877d5493b4d6e00050c
Complete the method that takes a sequence of objects with two keys each: country or state,
and capital. Keys may be symbols or strings.
The method should return an array of sentences declaring the state or country and its capital.
Examples
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"
country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"
mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
*/

const capital = capitals => {
    return capitals.map(pair => {
        const key = pair.state ? 'state' : 'country'
        return `The capital of ${pair[key]} is ${pair.capital}`
    })
}

const capital = capitals => capitals.map(pair => `The capital of ${pair.country || pair.state} is ${pair.capital}`)