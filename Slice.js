function imp(num){
    for(let i=0;i<num.length;i++){
        console.log(parseInt(num[i])+2);
    }
}
imp(process.argv.slice(2));