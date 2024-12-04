console.log("suresh");


var arr = [12,33,44,55,66,77,645,7,5,6,45,6,23]
var sum = 0;
var index = 1;
for(var i = 0;i<arr.length;i++){
    if(arr[i]%2!=0){
        sum+=arr[i];
        index++;
    }
}
var total= sum/index;
console.log(total);


let agge = [12,44,35,17,19,20,14]
function myfunc (agge){
    let total = agge>18;
    return(total)

}
let result = myfunc(agge.find(myfunc));
console.log(result); 

let arr = [1,2,3,4,5,6]
let values1 = arr.map((number)=>{
    let final = number*=4;
    return(final)
})
console.log(values1);


const numbers = [1,2,3,4,5,6,7,8];
let arr  = numbers.filter((num)=>num%2!=0);
console.log(arr)