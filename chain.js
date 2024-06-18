//get age of  male from Array
let arr=[
    {name:'A',age:14,gender:"F"},
    {name:'B',age:22,gender:"M"},
    {name:'C',age:34,gender:"F"},
    {name:'D',age:50,gender:"M"},
]

let gen=arr.filter((n)=>{
    return n.gender=="M"
}).map((n)=>{
    return n.age
})

console.log(gen); 

//take positive elements and sum of array

const trans=[100,200,300,-848,3800,-897,560];
let result=trans.filter((n)=>{
    return n>0
}).reduce(((acc,value)=>{
    let sum=acc+value;
    return sum
}),0)

console.log(result);