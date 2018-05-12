// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0 , stairs = '') {
    // finish loop all rows
    if ( n === row){
        return
    }

    if (n === stairs.length){
      console.log(stairs)
      return steps(n, row+1)
    } 
    // if (stairs.length <= row){
    //     stairs += '#'
    // } else {
    //     stairs += ' '
    // }
    let addStr = stairs.length <= row ? '#' : ' '
    // call step again to process  same row
    steps(n, row, stairs + addStr )
}

module.exports = steps;


// function steps(n) {
//     for (let row = 0 ; row < n; row++){
//         let stair = ''
//         for (let column = 0 ; column < n ; column ++){
//             if (column <= row){
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair)
//     }

// }