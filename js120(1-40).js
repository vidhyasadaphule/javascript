    'use strict';
    function myfunc(){
    var num = document.getElementById('txt1').value;

    if (num.length !== 10 || isNaN(num))
    {
        document.getElementById('p1').innerHTML="enter valid number";
    }else{
        document.getElementById('p1').innerText="number submitted ";
    }
    }

    function emailvalidate(){
    var regemail = /^[a-z]+@[a-z]+.com+$/;
    var email = document.getElementById('txt2').value;
    if(!regemail.test(email)){
        document.getElementById('p2').innerHTML="email is invalid";
    }else{
        document.getElementById('p2').innerHTML="email submitted";
    } 
    }

    function namevalidate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('txt3').value;
    //test() – This function is used to perform a regular expression match in JavaScript.
    if(!regName.test(name)){    
        document.getElementById('p3').innerText="invalid name given ";
    }else{
        document.getElementById('p3').innerText="name submitted ";
    }
    }
 
// 4) generate an array with value [10,20,30,40,50,60,70] and do the sum using reduce() function of javascript --nahi samajra

// 5) generate an array with value [1,2,3,4] and show the result as new array=> [1,4,9,16] using for in loop , forEach loop and map() function 

    var array2 = [1,2,3,4];
    for (let i in array2){
        array2[i]=(array2[i]*array2[i]);   
    }
    console.log(array2);

    /* forEach method */
    let myArray1 = [1, 2, 3, 4];
    myArray1.forEach((element, index) => {
        myArray1[index] = element * element;
    })
    console.log(myArray1);
      
    /* map method */
    let myArray2 = [1, 2, 3, 4];
    myArray2.map((element, index) => {
        myArray2[index] = element * element;
    })
    console.log(myArray2);
 //6) generate an array with value [1,4,6,8,12,11,13] and show the resuke as new array=> [1,11,14] using filter() function of javascript --- nahi samajra

 // 7) generate an example to show the difference between parseInt() & Number() function (Hint: take any value as an input)

    // The parseInt() method parses up to the first non-digit and returns the parsed value.  
    // Number() converts the string into a number, which can also be a float BTW.
    
    function intcheck(){
        var numb = document.getElementById('txt4').value;
        if(parseInt(numb)){
            document.getElementById('p4').innerHTML=parseInt(numb)+ "parse int result";     
        } else{
            document.getElementById('p4').innerHTML=Number(numb) + "number ()result";
        }
    }

// 8) create a custom function having name calculate() and pass 2 parameter (e.g: 10,20 ) within function & do the multiplication process.
// show the result in console. (Hint: use pass by value)

    function calculate(a,b){
        var res = a*b;
        console.log(res);
    }
    calculate(10,20);
//9) how to create an array using ( new Array() functionality ) in javascript?
//please write down sample code with some value in array.

   var newarr1 = new Array(3);
    newarr1[0]="vidhya";
    newarr1[1] ="tanisha";
    newarr1[2] ="akka";
  console.log(newarr1);

  var newarr2 = new Array("10","20","30");
  console.log(newarr2);

//   10) create an object ( custom object  ) in javascript with key (name,age,location ) with any value . show the result in console

 var people={name:"vidhya", age:"25" , location:"airoli"}
 console.log(people);

//11) on button click apply background color to body tag -->

  function changebackground(){
    document.getElementById('b1').style.backgroundColor = "red";  
  }

//  12) on mousemove event get x coordinate & y coordinate , and show the result in paragraph.
  function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = text;
  }
//   <!-- 13) create a textbox, enter dummy content and use onkeyup event to show 2 result:
//   a) data in capital case ( in paragraph having id para1)
//   b) data in small case ( in paragraph having id para2) -->
function myFunction(){
    var x=document.getElementById('dummy').value.toUpperCase();
    var y = document.getElementById('dummy').value.toLowerCase();
    document.getElementById('para1').innerHTML= x;
    document.getElementById('para2').innerHTML= y;
}

// 14) create a paragraph , on mouseover apply background color (grey) & onmouseout apply background color (lightgrey) 
function changegrey(){
    document.getElementById('p5').style.backgroundColor = "grey";
}

function changelightgrey(){
    document.getElementById('p5').style.backgroundColor = "lightgrey";
}

// 15) generate a function name calculate (Note: here you must have anonymous function instead of regular function ).
// print dummy text in console.
// a) call the same function using onblur event ( here use textbox )
// b) call the same function using onfocus event ( here use textbox )

// the input field and click outside the field to lose focus (blur)-- click inside the textbox
// The FocusEvent Object handles events that occur when elements gets or loses focus. -- click outside the textbox

let Calculate = function(){
   console.log("this is dummy text");
}

// 16) Create a variable called userName, assign the value "Ajay" to it. and check your answer in console

var userName = "Ajay";
console.log(userName);

// 17)  Create a variable called x, assign the value 10
// 	Create a variable called y, assign the value 20
// 	Create a variable called sum, assign the sum of x&y
// 	and check your answer in console

var x = 10;
var y = 20;
var sum = x+y;
console.log(sum);

// 18) Display the sum of 15 + 20, using two variables: x and y
// 	& show value in alert box

//  x = 15;
//  y = 20;
//  sum = x+y;
//  alert(sum);

//  19) get any value from prompt box and show the same value in console using log function

// var any = prompt("eneter anything");
// console.log(any);


// 20) Create a variable called answer, assign data1 * data2 to it, and display the result on browser using write() function
// 	here: data1 will have value 100 & data2 will have value 200

var data1 = 100;
var data2 = 200;
var answer = data1*data2;
document.write(answer + "  ");

// 21) create a variable data1 & data2 having value ajay & vijay respectively. add data1 & data2 using math ( + ) operator & understand the concept of concatenation operator  

data1 = 'ajay';
data2 = 'vijay';
console.log(data1 + " "+data2);

// 22) create a variable data1 , store 10.90 in data1. and check the data type of data1 in console

// 22) create a variable data1 , store 10.90 in data1. and check the data type of data1 in console
 
data1 =  10.90;
console.log(typeof(data1));

// 23) create two variable having values 10 & 20. & show the multiplication value in alert box -->

 data1 = 10;
 data2 = 20;
// alert(data1*data2);


// 24) create two variable having values 10 & 20. & show the division answer on browser using write() method

document.write(data1/data2);

// 25) there is a variable data having value as 10 . find the remainder ( hint : use modulus operator) 

//26) create a function ( name myfunc() ) and call the same function on button click ( hint : within function print test data using console)

function myfunc(){
    console.log("test data");
}

// 27) create a function ( name myfunc() ) and call the same function using keyup event using textbox ( hint : within function print test data using console)

function myFunc(){
    console.log("test data");
}

      
//28) create a function ( name myfunc() ) and call the same function using resize event ( hint : within function print test data using console)
function Myfunc(){
    console.log("test data");
}

//29) create a function ( name myfunc() ) and pass 2 value having number 10 & 20 , do the multiplication & show the result in console  ( hint: use button & onclick event)
function MyFunc(m,n){
    var ans = m*n;
    console.log(ans);
}

// 30) create a paragraph with some dummy content , on button click change the paragraph value ( hint : use innerHTML & querySelector() functionality) 

function changepara(){
    document.getElementById('p6').innerHTML="changed the paragaraph content!";
}

// <!-- 31) create a paragraph with some dummy content , on button double click change the paragraph background color to grey ( hint : use style & getElementById() functionality)  -->

function changebg(){
    var chngbg = document.getElementById('p7');
    chngbg.style.backgroundColor = "grey";
}

// 34) show 1 to 5 number on browser with break using for loop


for (var i = 0; i < 5; i++) {
  var n= "The number is " + i + "<br>" ;
  console.log(n);
  document.write(n); 
}

// document.getElementById("p10").innerHTML = text;

// 35) show only even numbers between 1 to 10 using for while loop , show results in console

// for(let j=1; j<=11 ; j++){
//     while(j%2==0){
//         console.log(j);
//     }
// }

//36) create a variable data , store any number in data & find out whether the no is even or odd ( hint : use if-else & mod operator )

var dat = 4;
if (dat % 2 == 0){
 console.log('even number');
}
else{
    console.log('odd number');
}

// 37) create a textbox (with id txt) & get any value from text box using button & show result in console ( hint: use onclick event & value property for textbox )
 function catchcontent(){
    var thatcontent=document.getElementById('txt').value;
    console.log(thatcontent);
 }

//  !-- 38) generate 2 textbox (having id txt1,txt2 respectively) , get values of both in data1 & data2. now show the sum of values in paragraph having id para ( note : if you recieve data from textbox then please check data type before you do the sum) -->
function dumby(){
var r = document.getElementById('txt1').value;
var s = document.getElementById('txt2').value;


if(typeof(r)==isNaN && typeof(s)==isNaN){
    document.getElementById('para').innerHTML = "please enter an number";
}
else{
    var summ = r + s;
    document.getElementById('para').innerHTML = summ ;
}
}
// <!-- 39) create a textbox (with id txt) & get value from textbox & check whether the entered value is string or number (hint: use isNaN() & if-else). show the result in console -->
function numberorstring(am){
   var xam = am.value;
   console.log(xam);
   if(isNaN(xam)){
    console.log("this a string");
   }
   else{
    console.log("this ia a number");
   }
}
// 40) create a textbox (with id txt) & get value from textbox , in case textbox is empty then please show textbox border with color red & border width 2px.
// function boxempty(emp){
//      var empbox = emp.value;
//      if(empbox == null){
//         document.getElementById('txt4').style.border = "solid red 2px";
//      }
//      else{
//         console.log(empbox);
//      }
// } doubt case














