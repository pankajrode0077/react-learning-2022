// Promise Example

//   pr  = () =>{
//     return new Promise((resolve,reject) => 
//         setTimeout(() => {
//             resolve('Hi boss');
//         },0)
//     )}

//     //  promise handler function
//     pr().then((response) => {
//         console.log(response);

//     }).catch(error =>{
//         throw Error(new error);
//     });

 // Q1 reverse the string 

 let x = 'hi pankaj';

 const reverseString = (str) =>{ 
  return  str.split('').reverse().join(''); // split convert string into array/ reverse fn reverse the array then join fn will join as sting
}
 console.log(reverseString(x));

 ////////////////////////////********************************//////////////////////////////////// */

 obj ={
     a:1,
     b:2,
     getA(){
        console.log(this.a);
        return this; // we need return this (object ref) from here then only we can getB() 
     },
     getB(){
        console.log(this.b);
     }
 };

 obj.getA().getB();  //Q2 would it work if not then what changes we need to do it in this fucntion


 ////////////////////////////********************************//////////////////////////////////// */
 //Q3 - create method which print the records of the array [1,2].print();
 
 let arr1 = [10,20,30];

 Array.prototype.print1 =  function() {
     let result = '';
   this.forEach(element => {
        result =  result + element +',';
     });

     console.log("print way1", result);
 }
 
 Array.prototype.print2 = function() {
    console.log("print way2", this.toString());
}
arr1.print1();
arr1.print2();

////////////////////////////********************************//////////////////////////////////// */
 //Q3 - clone the below object

normalObj = {
    x:10,
    a:{
        b:{
            c: 1
        }
    }
};

//shallow copy
let clonedObj1 = Object.assign({}, normalObj); // it will go only one level deep
clonedObj1.x =11; 
clonedObj1.a.b.c = 2; 
console.log(`clone obj = ${clonedObj1.x} old object = ${normalObj.x}`); // here old obj is not updated
console.log(`clone obj = ${clonedObj1.a.b.c} old object = ${normalObj.a.b.c}`);// here old obj is also updated

//deepCopy
let deepCopy = JSON.parse(JSON.stringify(normalObj));
deepCopy.a.b.c= 3;
console.log(`clone obj = ${deepCopy.a.b.c} old object = ${normalObj.a.b.c}`);// here old obj is not  updated

////////////////////////////********************************//////////////////////////////////// */
 //Q3 - sort and combine 2 arrays
 const arry1 =[1,2,3,4,5];
 const arry2 = [2,3,4,8,9,11];

 const res =  [...arry1,...arry2].sort((a,b) => a -b);

 //const res =  arry1.contact(arry2).sort((a,b) => a -b);

 console.log(res);

 ////////////////////////////********************************//////////////////////////////////// */
 //Q3 - write a function that does both ways
//add(1,2)
//add(1)(2)
 

 const add =  function (a,b) {

    if(a && b){
        return a + b;
    } else{
        return function (b) {
            return a + b;
        }
    }
     
 }

 
 console.log(add(1,2));

 console.log( add(1)(2));

  ////////////////////////////********************************//////////////////////////////////// */
 //Q3 - Find missing number from array
 
 // way 1
 numArr = [1,2,5,7,6,9,8,3,10];

 function findMissingNumber(arr) {
     arr = arr.sort();
     const length =  arr.length;
     let total =  (length + 2) * (length + 1) / 2;
     arr.forEach(ele =>{
        total = total - ele;
     })
     return total;
 }
console.log('missing number is' , findMissingNumber(numArr))

 // way 2

 const arrSize = numArr.length;
 const arrayTotal = numArr.reduce((acc, val) => acc + val)
 const total  = arrSize* (arrSize + 1)/2;
 console.log('Way 2 : missing number is' , total - arrayTotal)


 ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - function hoisting

 test1();
 ///test2(); // this will gives an reference error 
 function test1(params) {
    console.log('I am test1 : I am fucntion statement :support hoisting');
 }

 const test2 = function (params) {
     console.log('I am test2 :  I am fucntion expression: not support hoisting');
}

// this is also called function expression
(function test3(params) {
    console.log('I am test1 : I am fucntion statement :support hoisting');
 });

 // anonmys function
 (function () {
     
 })();   // indeiately invoked function

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - reverse string in one line code

 let str = 'Hi I am Pankaj';

 console.log('reverse output ::',str.split('').reverse().join(''));

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - return min and max sum of array elements by removing large and small number

 const arr = [1,2,3,4];
 //op - [10,6];

 function getMinMaxSumOfArray(arr) {
     
     const max = Math.max.apply(null,arr);
     const min = Math.min.apply(null,arr);

     let arraySum = arr.reduce((acc,item) =>  acc+ item );
    let minSum =  arraySum - max;
    let maxSum =  arraySum - min;

    return [minSum,maxSum];
 }

 console.log(getMinMaxSumOfArray(arr));

 ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - find the lenght of number variable without converting into string

 let num = 123456;



 function findLengthOfNum(num) {
    
    let count = 0;
    while(Math.floor(num) > 0){
        num = num /10;
        count++;
    }
    return count;
    
 }

 console.log("length of num var is ", findLengthOfNum(num));

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - output of the below program

 const profile = {
     fname:'pankaj',
     getName:() => {
         console.log(this.fname);
     }
 }

 profile.getName(); // undefined

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - find max number count from below array

 let x1 = [1,2,4,4,4,2,5];

 console.log(Math.max(...x1))

 let currentCount = 0;
 let maxCount = 0;
 let maxCountVal= 0

 for(let i = 0;i< x1.length; i++ ){
    const currentCount = x1.filter(x=> x === x1[i]).length;
    if(currentCount > maxCount){
        maxCount = currentCount;
        maxCountVal = x1[i]
    }
     x1 = x1.filter(x=> x !== x1[i])
 };

 console.log('Max count value is ', maxCountVal );

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - output of the below program

 const arrTime = [15,20,30,45,500];

 arrTime.forEach(val =>{
     setTimeout(() =>{
        console.log('val after setTimeout', val);
     },val)
 })

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - convert below time format into 24 hrs format

 let timeFormat = '01:20 PM';
 function getTwentyFourHourTime(amPmString) { 
    var d = new Date("1/1/2013 " + amPmString); 
    return d.getHours() + ':' + d.getMinutes(); 
}
console.log('24hr format',getTwentyFourHourTime(timeFormat));


 ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - output of the below program
 console.log(4-'2') // 2 "- operator change the type of next value "

  ////////////////////////////********************************//////////////////////////////////// */
 //Q4 - remove duplicate element from array
let numArray = [2,2,4,5,6,7,7,9];

let updatednumArray = new Set(numArray);

updatednumArray = [...updatednumArray]; // convert set into array using spread operator

console.log('removed duplicate values from array using set operator', updatednumArray);