// Task 
// Convert an array of integers into an array of strings representing the phonetics equivalent of the integer. 
// For example. 
// Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
// Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

// Solution: 
// Creating a dictionary to store integers as keys, and corresponding phonetics as values
let dictionary = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }

function convertIntegersToPhonetics(arry) {
  // Given the array with the format [3,25,209], the following var uses the spread operator to change the format into integers that are workables
  let array = [...`${arry}`].map(i => parseInt(i))
  let result = ''
    for (let i = 0; i < array.length; i++){
        if (array[i] in dictionary) {
            result += dictionary[array[i]]
        } else {
            // any value not found in the dictionary will yields ',' as result 
            result += ','
        }
    }
    return result
}

console.log(convertIntegersToPhonetics([3,25,209]))
console.log(convertIntegersToPhonetics([10,300,5]))