// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // method 3 use split , reduce
    return str.split('').reduce((reversed, character)=>
        character + reversed ,'')
}

module.exports = reverse;

// function reverse(str) {
//     // method 1 use array
//    return str.split('').reverse().join('')
// }


// function reverse(str) {
//     // method 2 use foreach string
//     let reversed = ''
//     for ( let character  of str){
//         reversed = character + reversed
//     }
//     return reversed
// }