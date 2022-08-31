// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passLength;
var charTypes = [true, true, true, true];

var getPassLength = function() {
  passLength = window.prompt("Please enter the length of password needed. (minimum 8, maximum 128");

  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid entry");
    getPassLength();
    return;
  }
  console.log(passLength);
  return;
}

var getCharTypes = function() {
  charTypes[0] = window.confirm("Do you want lowercase letters in your password?");
  charTypes[1] = window.confirm("Do you want UPPERCASE letters in your password?");
  charTypes[2] = window.confirm("Do you want numeric characters in your password?");
  charTypes[3] = window.confirm("Do you want special characters in your password?");
  console.log(charTypes);
}

// Add event listener to generate button and write password
generateBtn.addEventListener("click", function writePassword() {
  var userChoice = window.prompt("What kind of requirements would you like your password to meet?\n" +
  "Type 1 if you want both length and character requirements\n" +
  "Type 2 if you want length requirement only (password will consist of lowercase letters only)\n" +
  "Type 3 if you want character requirement(s) only");
  
  if (userChoice < 1 || userChoice > 3) {
    window.alert("Invalid entry");
    writePassword();
    return;
  }

  if (userChoice < 3) {
    getPassLength();
  }

  if (userChoice == 1 || userChoice == 3) {
    getCharTypes();
  }

  

  return;
});