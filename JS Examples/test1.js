 ////////////////////////////********************************//////////////////////////////////// */
 //Q1

 //Object.freeze() => it will not allow you to update existing properties and add new property

 //Object.seal() => it wil not allow you to add/remove new property but u can update existing

 const obj = {
     name:'pankaj'
 };

 Object.freeze(obj);

 obj.name = "Rajesh";

 console.log(obj.name)// "pankaj"

  ////////////////////////////********************************//////////////////////////////////// */
 //Q1 Math.max(); => return the max value from  given numbers of parameters

 console.log(Math.max()) // -Infenity => this is the starting point of this function

   ////////////////////////////********************************//////////////////////////////////// */
 // Q2 sort below array

 const arr = [1, 5, 3, 2, 1]; // we have added space before every number 

 console.log(arr.sort());// it will not sort the array because it will consider space as a string and so it will treat others number as string

 console.log(arr.sort((a,b) => a>b)); // it will sort in properly

 console.log(Number.MIN_VALUE); // smallest number in js
 console.log(Number.MAX_VALUE);
 console.log(Number.NEGATIVE_INFINITY);
 console.log(Number.POSITIVE_INFINITY);
 console.log(Number.MAX_SAFE_INTEGER);

   ////////////////////////////********************************//////////////////////////////////// */
 // Q3 ouput of the below code snippet
 (function (params) {
     let val1 = val2 = 100; // so here val2 is not assisacted with let so val2 is global variable
 })(); // this IIFE - imidiately invoke function expression
 console.log('val2', val2); //100
 //console.log('val1', val1); //ReferenceError: val1 is not defined
 
 console.log(NaN === NaN) // false

    ////////////////////////////********************************//////////////////////////////////// */
 // Q3 ouput of the below code snippet

 function y() {
    console.log(this.length); // output will be 2 
 }

 var x= {
     length:5,
     method: function (y) {
         arguments[0]();
     }
 }
 x.method(y,1);

     ////////////////////////////********************************//////////////////////////////////// */
 // Q3 ouput of the below code snippet

 var A ={
     x: function () {
        console.log('x');
        return this;
     },
     y: function () {
        console.log('y');
        return this;
     },
     z: function () {
        console.log('z');
     }
 }

 console.log(A.x().y().z());