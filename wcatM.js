let fs= require ("fs");

let input = process.argv.slice(2);
console.log("input",input);
let options=[];
let filepaths=[];
//to extract options and file paths
for(let i=0;i<input.length;i++){
    let firstchar = input[i].charAt(0);
    if(input[i]=="-s" || input[i]=="-n" || input[i]=="-b"){
       options.push(input[i]);
    }
    else{
        filepaths.push(input[i]);
    }
}
console.log("options",options);
console.log("filepath",filepaths);

//to check existence of file
for(let i=0;i < filepaths.length;i++){
    let isFilePresent = fs.existsSync(filepaths[i])
    if(isFilePresent==false){
        console.log("filepath",filepaths[i],"does not exist");
        return;
    }
}

//to read content from file paths
let totalcontent = "";
for(let i=0;i<filepaths.length;i++){
    let contentOfCurrent= fs.readFileSync(filepaths[i]);
    totalcontent+=contentOfCurrent+"\r\n";
}

let isSoption = options.includes("-s");
let isN =options.includes("-n") 
let isB = options.includes("-b");
let finalOption;
// if -b & -n come together
if(isN==true){
    if(isB==true){
        //option that comes first will be executed
        let idxB = options.indexOf("-b");
        let idxN = options.indexOf("-n");
        finalOption = idxB < idxN ? "-b":"-n";
    }
    else{
        finalOption = '-n';
    }
    
}
else if(isB == true){
    finalOption ="-b";
}
//to implement -s option-> remove empty line breaks 
if(isSoption==true){
    let contentArr=totalcontent.split("\r\n");
    // console.log(contentArr);

    let tempArr=[];
    for(let i = 0;i<contentArr.length;i++){
        if(contentArr[i]!==""){
            tempArr.push(contentArr[i]);
        }
    }
        totalcontent=tempArr.join("\r\n");   

}

//-n
if(finalOption=="-n"){

        let count=1;
        let contentArr=totalcontent.split("\r\n");
        for(let i =0;i<contentArr.length;i++){
            contentArr[i]=count + "." + contentArr[i];
            count++;
            //console.log(contentArr[i]);
    
        }
        totalcontent=contentArr.join("\r\n");
}

// for-b
if(finalOption=="-b"){
        let count=1;
        let contentArr=totalcontent.split("\r\n");
        for(let i =0;i<contentArr.length;i++){
            if(contentArr[i]!=""){
            contentArr[i]=count + "." + contentArr[i];
            count++;
            }
        }
        totalcontent=contentArr.join("\r\n");
}

console.log(totalcontent);


