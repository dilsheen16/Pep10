let obj={};
console.log(obj);

function fun(){  //this way is not needed
    return 'abcd';
}

let tony = {
    name:'Dilsheen',
    lastName:'Kaur',
    age:21,
    abc:undefined,
    isGood:true,
    qualities:['good','sweet','smart'],
    address:{
        street:'govind puri',
        state:'Delhi',
        pincode:110019,
    },
    computer:function (){
        let a = 22;
        console.log(a);
        return "hi";
    },
    sakshi: fun()
}
// console.log(tony.name);
// console.log(tony.age);
// console.log(tony.isGood);
// console.log(tony.qualities[1]);
// console.log(tony.computer());
// console.log(tony.address.pincode);
// console.log(tony['computer']());
// console.log(tony['name']);
// console.log(tony['qualities'][2]);
// console.log(tony['address']['state']);
// console.log(tony.computer());

// for(let key in tony){
//     console.log(key);
// }

 let karr = Object.keys(tony);
console.log(karr);

// for(let k in tony){
//     console.log(k);
// }
// for(let k in tony){
//     console.log(tony[k]);
// }
// for(let i=0;i<karr.length;i++){
//     console.log(karr[i]);
// }