// Write your code here
//to do--getStudents which takes 1 argument classroom. class room will contain boolean value hasTeachingAssistant 
//classList which is an array of peple. 1st value in the classlist will be the teacherx. if hasTeaching assitant =true, 2nd value will be the teacher assistant
// and remaining values are the students. if hasTeachingassistant =false , 2nd value thru end of the list wll be students.
// we have to return list of students.

function getStudents(classroom){
//     let {hasTeachingAssistant,classList} =classroom
//     // if(hasTeachingAssistant){
//     //     [teacher,hasTeachingAssistant,...students]=classList
//     // }else
//     // [teacher,...students]=classList
//     hasTeachingAssistant?[teacher,hasTeachingAssistant,...students]=classList: [teacher,...students]=classList
//     return students
// }
let {hasTeachingAssistant,classList}=classroom
// console.log(classList)
hasTeachingAssistant?[teacher,hasTeachingAssistant,...students]=classList:[teacher,...students]=classList
return students
}
const classroom={
    hasTeachingAssistant:false,
    classList:["Harry","Potter","Thasneem","Shyju","Sairah","Nooh"]
}

console.log(getStudents(classroom))
