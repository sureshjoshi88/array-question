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


let arr = [
    {
        name:"samsung",
        price:30000,
    },
    {
        name:"samsung",
        price:40000,
    },
]
let total = arr.reduce(addvalue);

function addvalue(prevalue,currentvalue){
    return prevalue.price+currentvalue.price;

}
console.log(total);


let arr = [1,2,3,4,5,6,7];
let result1 = arr.map((number)=>number*83);
console.log(result1);


let arr = [
    {
        name:"samsung",
        price:40000,
    },
    {
        name:"painasonik",
        price:60000,
    },
    {
        name:"oppo",
        price:50000,
    },
    {
        name:"apple",
        price:70000,
    },
]
let value = arr.reduce((prevalue,cuurentvalue)=>{
    console.log(prevalue,cuurentvalue)
    let result = prevalue.price+cuurentvalue.price;
    return{price:result}
});
console.log(value);


const products = [
    { name: 'Shirt',
         price: 25 },
    { name: 'Pants',
         price: 40 },
    { name: 'Shoes',
         price: 60 },
    { name: 'Socks',
         price: 5 }
  ];

let values = products.filter((num)=>{
    return num.price>30
}).reduce((pre,current)=>{
    let result = pre.price+current.price;
    return {price:result}
})
console.log(values);


let arr = [
    {
        name:"abhishek",
        age:13
    },
    {
        name:"kavita",
        age:12
    },
    {
        name:"suresh",
        age:19
        },
]

let total  = arr.reduce((pre,curr)=>{
    let result = pre.age+curr.age;
    return {age:result}
})
console.log(total);

let array = [1,2,3,4,5,6,7,8,9]
let reslut = array.filter((num)=>{
    return num>5
});
console.log(reslut);


let obj = {product:"samsung s23",price: 34009}

let mypromise = new Promise((resolve,reject)=>{
    if(obj.price%2==0){
        resolve(obj.price)
    }else{
        reject(obj.price)
    }
}).then((data)=>{
    console.log(data-=1000,"this is even");  
    
}).catch((value)=>{
    console.log(value+=1000,"this is odd");
});


let day  = 3;

switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thirsday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("invalid days");    
}

let value1 = 6756;
let output = 0;
while(value1>0){
    let reminder = value1%10;
    output = output*10 +reminder
    console.log(reminder);
    value1 = Math.floor(value1/10)
}