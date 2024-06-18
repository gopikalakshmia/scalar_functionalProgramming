//sum of an array
let arr=[1,2,3,4];
let result=arr.reduce((acc,value)=>{
    let sum=acc+value;
    return sum;
},0)

console.log(result);
