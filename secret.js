// Technical Skills Survey Project Part 2: Exercise 3;
// Creating a Secret Shift Value for Caesar;

//globale variable of secret shift value;

let randomNumber; // random decimal
let range; // range of random numbers
let randomDecimalSecretNumber; //new random decimal number
let integerRangeSecretNumber; // random integer
let randomSecretNumber; // final secret random number

// functions for secret shift value

// creating a decimal number from 0 to 1;
randomNumber = Math.random();

// fixing the range value between 33 and 3;
range = 33 - 3 + 1;

// assigning the range of numbers for secret shift value;
randomDecimalSecretNumber = randomNumber * range;

// adjusting the range of numbers for integer;
integerRangeSecretNumber = Math.floor(randomDecimalSecretNumber);

// adjusting secret value between three and 33 ;
randomSecretNumber = integerRangeSecretNumber + 3;
