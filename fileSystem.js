let fs = require('fs');
let data = fs.writeFileSync('abc.txt','Hello world');
let rdata = fs.readFileSync('abc.txt');
console.log(rdata.toString());
let wdata = fs.appendFileSync('abc.txt','I love computers');
console.log(fs.existsSync('abcs.txt'));
fs.unlinkSync('abc.txt');
fs.mkdirSync('express');
