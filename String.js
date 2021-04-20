let ar = "hello eve onetwoth of";
let arr = ar.split(' ');
console.log(arr);

let biggest = 0;
for(let i=1;i<arr.length;i++){
    if(arr[i].length>biggest){
        biggest = arr[i].length;
    }
}
console.log(biggest);




function confirmEnding(str, target) {
    let length1 = str.length;
    let length2 = target.length;
    let sub = str.slice(length1-length2);
    if (target == sub){
      return true;
    }
    else{
      return false;
    }
  }
  
  confirmEnding("Bastian", "n");