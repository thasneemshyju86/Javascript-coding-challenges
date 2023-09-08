// Write your code here

//password requirements : atleast 1 lowercase, attleast 1 uppercase, 1 digit , 1 special character, atleast 8 characters long

function checkPassword(password){
let oneLowerCaseLetter=/(?=.+[a-z])/
let oneUpperCaseLetter= /(?=.+[A-Z])/
let oneDigit= /(?=.+[0-9])/
let specialCharacter=/(?=.+[!@#$%^&*])/
let atleast8Char= /(?=.{8,})/

let isValid=
 oneLowerCaseLetter.test(password) && 
oneUpperCaseLetter.test(password) &&
oneDigit.test(password) &&
specialCharacter.test(password)&&
atleast8Char.test(password)

return isValid ?"strong password":"invalid password"
}

console.log(checkPassword("jA1$1w23"))
console.log(checkPassword("231wAj$"))