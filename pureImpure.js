//Impure
var a=5;
function add(n){
    console.log(n+a);
}

add(2);
add(3);

//Pure function

function add2(a,n){
    return (a+n);
}
console.log(add2(2,5));