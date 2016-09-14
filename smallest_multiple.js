/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  let smallestMultiple = 1;
  let storedSmallestMultiple;
  let foundSmallestMultiple = false;
  let primeNumbers = {};

  let divideLoop = function(divisor, total){

  };

  for(let i = 1; i <= ceiling; i++){
    //gets largest number to loop to
    smallestMultiple *= i;
  }
  //loops through all numbers to highest number
  for(let j = 1; j <= smallestMultiple; j++){
    //loops through numbers to divide
    for(let k = 1; k <= ceiling; k++){
      //if mod returns 0 then change found to true, set storedSmallestMultiple to that
      if(j % k === 0){
        foundSmallestMultiple = true;
        storedSmallestMultiple = j;
      } else if (j % k !== 0){
        foundSmallestMultiple = false;
      }
      if(foundSmallestMultiple === false){
        break;
      }
    }
  }
  return storedSmallestMultiple;
};