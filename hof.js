let arr=[1,2,3,4,5];
let sqareArr=[]

for(let num of arr){
    sqareArr.push(num*num);
}

console.log(sqareArr);


//map give output as Array

let sArr=arr.map((n)=>{
    return (n*n)}
)
console.log(sArr);

let sArr2=arr.map(function(n){
    return (n*n)}
)
console.log(sArr);

//Foreach give output as single element
arr.forEach((num1)=>{
    console.log(num1*num1);
})