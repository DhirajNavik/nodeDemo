
const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send('Hello world')
})

app.get('/chiken',(req,res)=>res.send('let me cook first'));

app.get('/paneer',(req,res)=>{
    var ingerident = {
        item1:'milk',
        item2:'expire in 2 days',
        item3:'teri maa ki chut'
    }
    res.send(ingerident);
})
app.listen(3000,()=>{
    console.log('server is lie on 3000');
})

















// // function add(a,b){
// //     return a+b;
// // }

// // var add =  function add(a,b){
// //         return a+b;
// //     }

// // var add = (a,b)=>{return a+b};
// var add=(a,b)=>a+b;

// var result =  add(10,3);

// console.log(result);


// (function(){
//     console.log("auto call function");
// })();

// function callback(){
//     console.log("Main hu callback function");
// }

// var abc = function(a,b,call){
//     var result = a+b;
//     console.log(a+b);
//     call();
// }

// // abc(1,2,callback);
// abc(1,2,()=>console.log("chutiya hu"));

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();

// fs.appendFile('greeting.txt',"\nHi "+user.username+"!",()=>console.log("help!"))

// const notes = require('./notes.js');

// console.log(notes.age);

// // console.log(os);

// var result = notes.addNumbers(1,28);

// console.log(result);


// //lodash

// var _ = require("lodash");
// var data = [1,1,1,1,2,1,1,1,2,];
// console.log(_.uniq(data));


