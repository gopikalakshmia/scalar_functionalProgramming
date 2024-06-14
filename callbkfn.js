const pFirstname=(cb)=>{
    console.log("Gopika");
    cb();//calling plastname in this function
}
const pLastname=()=>console.log("Lakshmi")//  callback function

pFirstname(pLastname);