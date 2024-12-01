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


let arr = ["a","b","a","c","e","b","d","k"];
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