console.log(process.argv);
function add(num){
    console.log(parseInt(num)+2);
}
add(process.argv[2]);
