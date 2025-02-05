//Q3)Sorting an array of students on basis of score -- 


const students = [ 
    { name: "John", score: 85 }, 
    { name: "Bill", score: 92 }, 
    { name: "Natalie", score: 78 }, 
    { name: "David", score: 90 } 
];

students.sort((a,b)=>{
    return b.score - a.score;
})
console.log(students);
