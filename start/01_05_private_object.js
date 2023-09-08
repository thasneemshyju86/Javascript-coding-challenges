// Write your code here

const userName=Symbol("userName")
const password=Symbol("password")

const user={
    [userName]:"thasneem shyju",
    [password]:12345,
    age:37
}

console.log(user.userName)  //undefined
console.log(user.password)//undefined
console.log(user)