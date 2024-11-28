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


