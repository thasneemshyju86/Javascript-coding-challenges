// Write your code here

function urlify(blogTitle){
const punctuations=/[!@#$%^&*();',./{}]/g
 blogTitleWithoutPunctuation=blogTitle.replace(punctuations,"")
 return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", '-')
}

console.log(urlify("How i got into programming!!!"))
console.log(urlify("i've got a new job!!!@"))
