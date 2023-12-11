// Assignment code here

const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const character = "!@#$%<>&?";

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = "";
function generatePassword () {

var passwordlength = parseInt(prompt("How long would you like you password?"))

if (passwordlength < 8 || passwordlength > 128 || Number.isNaN(passwordlength) ) {
  alert("Password length must be above 8, below 128, and an integer value")
return null
}

var wantuppercase = confirm ("Would you like uppercase letters?")
var wantlowercase = confirm ("Would you like lowercase letters?")
var wantnumbers = confirm ("Would you like number letters?")
var wantcharacter = confirm ("Would you like charater letters?")
if (!wantuppercase && !wantlowercase && !wantnumbers && !wantcharacter){
  alert ("Password must include one option")
  return null
}
if (wantuppercase === true) {
  password += uppercaseletters
}

if (wantlowercase === true) {
  password += lowercaseletters
}

if (wantnumbers === true) {
  password += numbers
}

if (wantcharacter === true) {
  password += character
}
// console.log(password)
var newpassword = ""
for (var i=0; i<passwordlength; i++){
var randomindex = Math.floor(Math.random() * password.length)
newpassword += password[randomindex]
}
// console.log(newpassword)
return newpassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
