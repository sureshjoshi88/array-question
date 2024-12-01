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