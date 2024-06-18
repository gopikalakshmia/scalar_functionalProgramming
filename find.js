//return  the first element in an array based on the given condition
let arr=[1,2,3,-1,-2,3];
let num=arr.find((n)=>
    {return n<0});

console.log(num);

//return the index of the first element in an array based on the given condition
let index=arr.findIndex((n)=>
    {return n<0});

console.log(index);

//return true if any of element satisfied the condition 

let sme=arr.some((n)=>{
    return n<0;
})
console.log(sme);//true

//return true if all of the elements in the array  satisfies the condition

let eve=arr.every((n)=>{
    return n>0
})
console.log(eve);//false

