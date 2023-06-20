// Assignment code here

// Queries Section
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Variables Section
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsVariable = "";

// Write password to the #password input
function writePassword() {
    // Password field reset
    password.value === "";
    var randomString = "";
   
    // Screen refresh blocker
    event.preventDefault();
   
    // Password choice prompts
    var lowercaseLett = confirm("Would you like your password to contain lowercase letters?");
    var uppercaseLett = confirm("Would you like your password to contain uppercase letters?");
    var num = confirm("Would you like your password to contain numbers?");
    var specialChar = confirm("Would you like your password to contain special characters?");
    var passwordLength = prompt("Password length must be at least 8 characters and no more than 128 characters.");

    // Statement monitor alert
    if (passwordLength <8 || passwordLength >128) {
        alert("Password is not between 8 characters and no more than 128 characters. Please try again.");
        var passwordLength = prompt("Password length must be at least 8 characters and no more than 128 characters.");
    }

 // Conditional choice prompts
 else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
  alert("You must chose at least one password criteria.");
  var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
}

// Random choice influenced generator
for (var i = 0; i < passwordLength; i++) {
  // Continuous character length generator
  randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}

// Choice based password generator
if (lowercaseLett) {
  optionsVariable += lowercaseAlphabet;
}

if (uppercaseLett) {
  optionsVariable += uppercaseAlphabet;
}

if (num) {
  optionsVariable += numbers;
}

if (specialChar) {
  optionsVariable += specialCharacters;
}

password.value = randomString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);