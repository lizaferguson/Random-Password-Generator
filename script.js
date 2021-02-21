// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Prompting user to input a length for their password
  var length = prompt("password length", "Number Between 8 and 128");
  
//Validating length input
  if (length >= 8 && length <=128) {
 } else {
   alert("Invalid length");
   return -1;
 };

 console.log(length);

//Creating prompts for the user asking which types of characters to include in password
  var lowercasePrompt = confirm("Use lowercase?");
  var uppercasePrompt = confirm("Use uppercase?");
  var numericPrompt = confirm("Use numbers?");
  var specialCharPrompt = confirm("Use special characters?");

  console.log(lowercasePrompt);

 
 
//defining function to include users selected characters
  var password = generatePassword(length, lowercasePrompt, uppercasePrompt, numericPrompt, specialCharPrompt);
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

function generatePassword(length, lowercasePrompt, uppercasePrompt, numericPrompt, specialCharPrompt) {

  //Creating variables containing possible characters
  var lowLetters = "abcdefghijklmnopqrstuvwxyz";
  var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specials = "!@#$%^&*(){}[]=<>/,.|~?";

//Validating user prompt inputs
  if (typeof(lowercasePrompt) != undefined && 
      typeof(uppercasePrompt) != undefined &&
      typeof(numericPrompt) != undefined &&
      typeof(specialCharPrompt) != undefined) {
      } else {
        alert("One of the values is undefined");
        return -1;
      };


//Validating that at least one character type was selected by user, otherwise alert
  if ( lowercasePrompt || uppercasePrompt || numericPrompt || specialCharPrompt) {
 } else {
   alert("No password generated.");
   return("Undefined");
 };

//Creating a concatenated string of characters to be used in password
 var characters = '';
 if (lowercasePrompt) {
   characters = characters.concat(lowLetters);
 };
 if (uppercasePrompt) {
   characters = characters.concat(capLetters);
 };
 if (numericPrompt) {
   characters = characters.concat(numbers);
 };
 if (specialCharPrompt) {
   characters = characters.concat(specials);
 };

//creating for loop so returns character corresponding to user's selected length
var generatedPassword = '';
for(let i=0; i<length; i++) {
  var passCharacter = characters.charAt(Math.floor(Math.random()*characters.length));
 console.log(passCharacter);
  
  //concatenating individual characters into a string, which is the generated password
  generatedPassword = generatedPassword.concat(passCharacter);
};

//returning the concatenated password string to the user
return generatedPassword;
  return "ppi";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
