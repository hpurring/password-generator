// Assignment code here

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password
function generatePassword() {
  const totalLength = prompt("How many characters would you like to use? (Choose a number between 8 and 128.)");
  if (totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);
  } else {
    alert('Your password must be 8-128 characters!');
  }
  
  // var options = {
  //   hasNumber: window.confirm('Would you like to include numbers?'),
  //   hasUppercase: window.confirm('Would you like to include uppercase letters?'),
  //   hasLowercase: window.confirm('Would you like to include lowercase letters?'),
  //   hasSymbol: window.confirm('Would you like to include special characters?'),
  // };

  // if (options.hasLowercase === false && options.hasUppercase === false && options.hasSymbol === false) {
    
  // }

  let upper = confirm("Would you like to include uppercase letters?");
  let lower = confirm("Would you like to include lowercase letters?");
  let symbol = confirm("Would you like to include special characters?")
  let number = confirm("Would you like to include numbers?");

  let allChars = "";
  let password = "";

  
  if (upper) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  }

  if (lower) {
    allChars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (symbol) {
    allChars += "'!#$%&()*+,-./:;<=>?@^[\\]^_``{|}~'";
  };
  
  if (number) {
    allChars += "0123456789";
  };

   
  // Generate password that matches the selected criteria
  // create a for loop to iterate over the chosen characters

 
  for (var i = 0, n = totalLength; i < totalLength; i++) {
    //picks a character within charSet at index of random number
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  console.log(password);

  // return the generated password
  return(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
