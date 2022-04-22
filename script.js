// Assignment code here
var specCharsArr = Array.from("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
var numCharsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowercaseCharsArr = [
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
]
var uppercaseCharsArr = [
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
]

function getParameters() {
  var includedChars = []
  var specChars = window.confirm('Would you like to include SPECIAL CHARACTERS?')
  var numChars = window.confirm('Would you like to include NUMBERS?')
  var lowerCaseChars = window.confirm('Would you like to include LOWER CASE CHARACTERS?')
  var upperCaseChars = window.confirm('Would you like to include UPPER CASE CHARACTERS?')

  if (specChars) {
    includedChars.push(specCharsArr)
  }
  if (numChars) {
    includedChars.push(specCharsArr)
  }
  if (lowerCaseChars) {
    includedChars.push(lowercaseCharsArr)
  }
  if (upperCaseChars) {
    includedChars.push(uppercaseCharsArr)
  }
  return (includedChars.flat())
}

function passwordLen() {
  var length = window.prompt('Enter password length (8 - 128 characters):')
  return length
}

function generatePassword() {
  var includedCharsA = getParameters()
  var passLen = passwordLen()
  var randomPassword = ""
  for (let i = 0; i < passLen; i++) {
    var randomChar = includedCharsA[Math.floor(Math.random() * includedCharsA.length)]
    randomPassword += randomChar
  }
  return randomPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);