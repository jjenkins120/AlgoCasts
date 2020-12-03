// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SOLUTION 1
function capitalize(str) {
    return str.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')
}

// SOLUTION 2
// function capitalize(str) {
//     const words =[]
//     for (let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ')
// }

// SOLUTION 3


module.exports = capitalize;
