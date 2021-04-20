let a = [7,88,9,2,66];
function arr(a){
    let largest = a[0];
    let smallest = a[0];
    for(let i=0;i<a.length; i++){
        if(a[i]>largest){
            largest = a[i];
        }
        if(a[i]<smallest){
            smallest = a[i];
        }
    }
    console.log("Largest is "+ largest);
    console.log("Smallest is "+ smallest);
}
arr(a);