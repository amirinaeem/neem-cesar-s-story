//Technical Skills Survey Project Part 2: Exercise 2 
//meeting the best friend;


//variables of best friend module;

const friend = "BRUTUS" //Ceasr's frined;
const shiftValue = 3; //shift value
const alphabet = "abcdefghijklmnopqrstuvwxyz"; // alphabet;
let encryptedMessage = ""; // encrypted message;
let friendFirstLetter; //Ceasr's frined first letter of his name;
let indexFriendFirstLetter; //index of first letter in alphabet;
const alphabetLength; //length of alphabet;
let newIndexFirstLetterFriend; //new index of first letter;
let encryptedFirstLetterInAlphabet; //encrypted first letter;


// functions of best friend module;

//Find the first letter of Ceaser's friend.
friendFirstLetter = friend[0];

// index of first letter of friend in alphabet
indexFriendFirstLetter = alphabet.indexOf(friendFirstLetter); 

// getting the alphabet length;
alphabetLength = alphabet.length;

// moving the first index letter of friend by the given value in alphabet;
newIndexFirstLetterFriend = indexFriendFirstLetter + shiftValue; 

// limiting the moving process to the alphabet length;
newIndexFirstLetterFriend % alphabetLength;

// getting the encrypted first letter with new index in alphabet;
encryptedFirstLetterInAlphabet = alphabet[newIndexFirstLetterFriend];

//Extracting the first 3 letters of the encrypted first letter
encryptedMessage  = "WXDDFDFSDFDSFDSFDSFDSFDSFDSFDSFDS";
encryptedMessage.slice(0, 3);



