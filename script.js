// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Declare necessary variables for password criteria selection
var passLength;
var charTypes = [true, true, true, true];

// library of available characters to choose from for the password
var charLibrary = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !@#$%^&*()`~'/?"];
var passLibrary = "";
var password = "";

// function to get user input for types of password criteria
var passwordPrompts = function() {
  var userChoice = window.prompt("What kind of requirements would you like your password to meet?\n" +
  "Type 1 if you want both length and character requirements\n" +
  "Type 2 if you want length requirement only (password will consist of lowercase letters only)\n" +
  "Type 3 if you want character requirement(s) only (password will be 8 characters long)\n" +
  "Type 4 if you want default settings (8 characters long, lowercase letters only)");

  if (userChoice < 1 || userChoice > 4) {
    window.alert("Invalid entry");
    passwordPrompts();
    return;
  }

  if (userChoice < 3) {
    getPassLength();
  } else {
    passLength = 8;
  }

  if (userChoice == 1 || userChoice == 3) {
    getCharTypes();
  } else {
    charTypes = [true, false, false, false];
  }

  return;
}

// function to get user input for password length
var getPassLength = function() {
  passLength = window.prompt("Please enter the length of password needed. (minimum 8, maximum 128");

  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid entry");
    getPassLength();
    return;
  }
  return;
}

// function to get user input for password char types
var getCharTypes = function() {
  charTypes[0] = window.confirm("Do you want lowercase letters in your password?");
  charTypes[1] = window.confirm("Do you want UPPERCASE letters in your password?");
  charTypes[2] = window.confirm("Do you want numeric characters in your password?");
  charTypes[3] = window.confirm("Do you want special characters in your password?");

  if (!charTypes[0] && !charTypes[1] && !charTypes[2] && !charTypes[3]) {
    window.alert("Please select at least one type of characters.");
    getCharTypes();
    return;
  }
  return;
}

var writePassword = function() {
  passLibrary = "";
  for (let index in charTypes) {
    if (charTypes[index]) {
      passLibrary += charLibrary[index];
    }
  }

  password = "";
  for (let index=0; index < passLength; index++) {
    password += passLibrary.charAt(Math.floor(Math.random()*passLibrary.length));
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  return;
}

// Add event listener to generate button and write password
generateBtn.addEventListener("click", function getPassword() {
  passwordPrompts();
  
  writePassword();
  
});
