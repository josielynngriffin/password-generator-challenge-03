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
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];


console.log(lowerCase);
console.log(upperCase);
console.log(numbers);
console.log(special);

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
  console.log(characterLength);
//confirm whether to include lowercase, uppercase, numeric, or special characters
  let hasLower = confirm("Will your password have lowercase characters?");
  let hasUpper = confirm("Will your password have uppercase characters?");
  let hasNumbers = confirm("Will your password have numbers?");
  let hasSpecial = confirm("Will your password have special characters?");
//store as variable confirm("do u want __?"), store as a password option in to use in function
//for each choice, add options to an array
    if (hasLower === true) {
      passwordOptions = passwordOptions.concat(lowerCase);
    }
    if (hasUpper === true) {
      passwordOptions = passwordOptions.concat(upperCase);
    }
    if (hasNumbers === true) {
      passwordOptions = passwordOptions.concat(numbers);
    }
    if (hasSpecial === true) {
      passwordOptions = passwordOptions.concat(special);
    }
    console.log ("this logs password options: " + passwordOptions);
// generate random password with function, math.Random
    for ( let i = 0; i < characterLength; i++) {
      let passwordFinal = passwordOptions[Math.floor(Math.random()*passwordOptions.length)];
      console.log("this logs the calculated, final password: " + passwordFinal);
      //passwordFinal= passwordFinal.join("");
      password.push(passwordFinal);
      console.log("this logs the value of password: " + password);
      //return passwordFinal.join('');
      //return passwordFinal.join("");
    }
    //password.push(passwordCalc);
}

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("this runs the value of password, outside of the function: " + password);
  passwordText.value = password.join("");
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
