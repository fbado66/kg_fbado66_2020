// Task 
// Convert an array of integers into an array of strings representing the phonetics equivalent of the integer. 
// For example. 
// Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
// Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

// Approach: 
// First thing is to create a dictionary hash where integers can be stores with their corresponding phonetics 

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

//   Next would be to create a function where the input can be transform into the corresponding phonetics
//   -  such as given [3, 25, 209] the result would be “Three,TwoFive,TwoZeroNine”
// - The idea is to grab each element on the array, and split each one, into a single integer such as given [3, 25, 209] the first number is already on its own, therefore can go into the second element 25, and here we can break it into 2 and 5, and do the same for the next elements. 

// A easier and quick way to achieve this result would be to use the spread operator in the given array where everything can be parseInt, and for this specific case, there is no other characters than integers and ',' so whenever the function sees a non integer, we can use an if else statement to handle the output. 