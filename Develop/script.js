// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password
function generatePassword() {
  const totalLength = prompt("How many characters would you like to use? (Choose a number between 8 and 128.)");
  if (totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);
  } else {
    alert('Your password must be 8-128 characters!');
    return("Try again. This time, follow directions.")
  }
  
  let upper = confirm("Would you like to include uppercase letters?");
    if (upper) {
      alert("Excellent choice. We'll include uppercase letters.");
    } else {
      alert("Ok, no uppercase letters.")
    }
  let lower = confirm("Would you like to include lowercase letters?");
    if (lower) {
      alert("You have exquisite taste. We'll bring out the lowercase letters.");
    } else {
      alert("Gotcha, no lowercase letters.")
    }
  let symbol = confirm("Would you like to include special characters?")
    if (symbol) {
      alert("Of course. We'll select the most special characters for you.");
    } else {
      alert("Copy that. Absolutely no special characters.")
    }
  let number = confirm("Would you like to include numbers?");
    if (number) {
      alert("Our numbers are fantastic. You won't regret this.");
    } else {
      alert("We hear you. NO numbers.")
    }

  if (!upper && !lower && !symbol && !number) {
    alert("You must use at least one type of character! Try again.")
  }

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

