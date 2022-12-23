// Assignment code here
// These are my character arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
var upercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var Specials = ["!", "@", "#", "$", "%", "&"];
var Numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function userPrompts() {
  var length = prompt("How many characters do you want your passowrd to be?");
if (length < 8 || length > 128) {
  alert("Type in a number between 8 and 128");
  return null;
    }
 var islowercase = confirm("Do you want to include lowercase letters?");
 var isuppercase = confirm("Do you want to use Uppercase?");
 var isspecials = confirm("Do you want any special characters?");
 var isnumeric = confirm("Do you want to use numbers?");
if (islowercase === false && isuppercase === false && isspecials === false && isnumeric === false) {
  alert("You can't cancel everything so back to start you go")
  return null;
} 
var userinfo = {
  length: length, 
  islowercase: islowercase,
  isuppercase: isuppercase,
  isspecials: isspecials,
  isnumeric: isnumeric,
}
return userinfo; 
}

//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
function generatePassword() {
  var useranswers = userPrompts();
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    return password;
}
console.log("Your password is" + password);
alert(password);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// I don't know why my passowrd is not displaying after all of these steps.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

