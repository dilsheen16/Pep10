function DTB(a){
    let res=0 , pow=1;
    while(a!=0){
        let rem = a%2;
        res += rem*pow;
        a = Math.floor(a/2) ;
        pow*=10;
    }
    return res;
}
// let a = 33;
let ans = DTB(45);
console.log(ans);