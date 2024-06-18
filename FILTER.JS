//if we want to process an array based on some consition,like print only positive numbers in an array,print even numbers 
//in an array
//filet will give output as an array based on condition,it will discard the elements which is not satisfies the condition


//print positive numbers only
const transaction=[100,200,300,-848,3800,-897,560];
let posArray=transaction.filter((n)=>{
    return n>0
})
console.log(posArray);