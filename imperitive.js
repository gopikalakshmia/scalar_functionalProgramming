 //Imperative way of writing code
 
 let num=6;
 let sqaure=num*num;
 let iseven;
    if(sqaure%2==0)
        iseven=true;
    else
    iseven=false;

    console.log(iseven);


    //Declarative way of writig code

    let Iseven=(num)=>(num*num)%2==0?true:false;
    console.log(Iseven(11));
