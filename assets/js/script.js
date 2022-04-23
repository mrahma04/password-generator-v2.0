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

var includedChars = []

function getPassCriteria() {
  // var includedChars = []
  var specChars = window.confirm('Would you like to include special characters?')
  var numChars = window.confirm('Would you like to include numbers [0-9]?')
  var lowerCaseChars = window.confirm('Would you like to include lower case characters [a-z]?')
  var upperCaseChars = window.confirm('Would you like to include upper case characters [A-Z]?')

  var categories = []

  if (specChars) {
    includedChars.push(specCharsArr)
    categories.push('Special Characters')
  }
  if (numChars) {
    includedChars.push(numCharsArr)
    categories.push('Numbers')
  }
  if (lowerCaseChars) {
    includedChars.push(lowercaseCharsArr)
    categories.push('Lower Case Characters')
  }
  if (upperCaseChars) {
    includedChars.push(uppercaseCharsArr)
    categories.push('Upper Case Characters')
  }
  // if (!specChars && !numChars && !lowerCaseChars && !upperCaseChars) {
  //   window.alert(`Booo! You didn't select any character types. Please try again!`)
  //   getPassCriteria()
  // }
  if (includedChars.length < 1) {
    window.alert(`Booo!! Please select at least 1 character type`)
    getPassCriteria()
  } else {
    window.alert(`Your password will include - ${categories.join(', ')}`)
  }
  // return includedChars
}

function getPassLength() {
  var length = window.prompt('Enter password length (8 - 128 characters):')
  if (length >= 8 && length < 128) {
    return length
  } else {
    window.alert('Password length not valid. Please try again!')
    return getPassLength()
  }
}

function getRandomInt() {
  // creates an 'empty' array with 32-bit elements
  var byteArray = new Uint32Array(1) // 1 element initialized to 0
  var randomInt = window.crypto.getRandomValues(byteArray)
  // divide the random integer by the max value of Uint8 which is 2 ^ 32 - 1
  var randomIntDecimal = randomInt / (Math.pow(2, 32) - 1)
  console.log('Cryptographically strong random number -->', randomIntDecimal)
  return randomIntDecimal
}

function generatePassword() {
  // var includedCharsArr = getPassCriteria().flat()
  window.alert(`You'll be prompted with a series of questions before generating your new password. Select at least ONE character type. Click 'Ok' for 'YES' and 'Cancel' for 'NO'.`)
  var passLength = getPassLength()
  getPassCriteria()
  var includedCharsArr = includedChars.flat()
  var randomPassword = ""
  for (let i = 0; i < passLength; i++) {
    var randomChar = includedCharsArr[Math.floor(getRandomInt() * includedCharsArr.length)]
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