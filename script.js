// Assignment Code
var generateBtn = document.querySelector("#generate");
//psuedo code

//prompt series for password criteria (place values into a variable?)
//length between 8 and 128 characters, validating this prompt and storing as var
//validate inputs, atleast one character type selected and a password can be generated using mathods

//characters for password stored in let, specifications stored in their own array

//let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
let characterLength;
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

console.log(lowerCase);
console.log(upperCase);
console.log(numbers);

let passwordOptions = [];
let password = [];
//function to generate password
function generatePassword() {
  let characterLength = prompt("How many characters will your password be?")
//password prompts: how many characters? valid =<8,>=128
//if => 8 || (or) x> 128, valid, ifNaN invalid
// 128 < x or x < 8 >>> alert, please select a password length between 8 and 128 characters
  if (characterLength < 8 || characterLength > 128) {
    alert("Please select a password length between 8-128!");
    generatePassword();
  }
//confirm whether to include lowercase, uppercase, numeric, or special characters
let hasLower = confirm("Will your password have lowercase characters?");
let hasUpper = confirm("Will your password have uppercase characters?");
let hasSpecial = confirm("Will your password have special characters?");
//store as variable confirm("do u want __?"), store as a password option in to use in function
//for each choice, add options to an array
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
