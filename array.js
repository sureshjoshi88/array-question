var i = 1;
var even = 0;
 var odd = 0;
while(i<=100){
    if(i%2==0){
        even = i;  
    }
    else if(i%2!=0){
        odd = i;   
        console.log(`the even number of :-${even}= the odd number of :-${odd}`);
    }
    i++;
}

let price = [5000,3863,9365,30632,9764,693075,743956,999330]
let index = 0;
for(let rupee of price){
    console.log(`the value is :-${rupee}`);
    let ofer = rupee*33/100;
    price[index] = price[index]-ofer;
    console.log(`the discount new value is :-${price[index]}`);
    index++;
    
}

let sentence = "hello world hello universe hello world";
let obj = {}
sentence = sentence.split(" ");
for(let i = 0;i<sentence.length;i++){
    let value = sentence[i];
    if(obj[value]){
        obj[value] +=1
    }else{
        obj[value]=1
    }
}
console.log(obj);


let arr = ["a","b","a","c","e","b","d","k","o"];
let newarr = [];
let index1 = 0;
for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            index1++;
        }
    }
    if(index1<2){
        newarr.push(arr[i])
    }
    index1=0;
}
console.log(newarr);


let arr12 = ["apple","mango","orange","banana"];
arr.sort()
console.log(arr12);

let movies = ['Avengers', 'Kick', 'Endgame'];
let userInput = prompt("Search for movie : ");

// ****************************************************
let lowerCaseInput = userInput.toLowerCase();
let lowerCaseMovies = [];

for(var i=0;i<movies.length;i++){
    lowerCaseMovies.push(movies[i].toLowerCase())
}

console.log(lowerCaseMovies.includes(lowerCaseInput));


function multply(...number){
    return number*number
}

let ar = [2,3,10,9,4,8,7,5,6]
for(let i = 0;i<ar.length;i++){
    console.log(multply(ar[i]))
}



let input = Number(prompt("enter a number :-"))
let arrs = [1,2,3,4,5,6,7,8]
let factorial = 1
if(arrs.includes(input)){
    for(let i = input;i>0;i--){
        factorial = factorial*i
    }
    console.log(factorial);
    
}else{
    console.log("the value for not present in arr");
    
}


let arred  = [1,2,4,6,9,66,43]
let total = arred.every((value)=>{
    return value%2==0

})
console.log(total);


let myar = [1,2,3,4,5,6,7,8]
myar.fill(0,2,5)
console.log(myar);


const newarray = new Array(10).fill(-1)
console.log(newarray);