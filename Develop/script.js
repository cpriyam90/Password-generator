// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define variables for password criteria
var characterLength = 8;
var choice = [];

var specialCharacter = ['!','@','#','&','*','(',')','%','$','+','<','>','?'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','X','Y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];

//Define function to create prompts for user
function createPrompts () {
  characterLength = parseInt(prompt("Select between 8 to 128 characters for password length"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number between 8-128");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choice = choice.concat(lowerCase);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choice = choice.concat(upperCase);
  }

  if (confirm("Would you like special characters in your password?")) {
    choice = choice.concat(specialCharacter.Case);
  }

  if (confirm("Would you like numbers in your password?")) {
    choice = choice.concat(number);
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
