
// 41) create a textbox (with id txt) & get value.if the value is string then show error in paragraph as only number is required. 

function showerror(err){
    var err=(err.value);
    if(isNaN(err)){
        document.getElementById('para1').innerHTML = "only number is required!";
    }
    
}

// 42) create a textbox (with id txt). create a paragraph (having id para ). onclick event get value from textbox and display it within paragraph ( hint: you may use innerText or innerHTML , get the diff. between innerText,innerHTML)

function getinpara(getpara){
    getpara = getpara.value;
    document.getElementById('para2').innerHTML = getpara;  
}


// 43) create a textbox (with id txt). create a paragraph (having id para ).onclick event get only number from textbox & display square of the no which you have entered ( hint: use Math library )---------------DOUBT ON CLICK IN INPUT IT IS SHOWING 0

// function displaysquare(){
//     var sq = document.getElementById('txt3').value;
//     if(isNaN(sq)){
//         document.getElementById('para3').innerHTML="please enter a number";
//     }
//     else{
//         sq=sq*sq;
//         document.getElementById('para3').innerHTML= sq;
//     }
// }

function displaysquare(sq){
    var p = sq.value;
    if(isNaN(p)){
        document.getElementById('para3').innerHTML = "please enter a number";
    }
    else{
    var m = Math.pow(p,2);
    document.getElementById('para3').innerHTML = m;
    }
}

// 44) create an array having any three number. show array structure within console. print individual values also.

var arr = [1,2,3];
console.log(arr);
arr.forEach(element => {
    console.log(element);
});

// 45)  create an array having any three number. extract each values using for loop

var num = [4,5,6];
for(let i=0;i<num.length;i++){
   console.log(num[i]);
}

// 46)  create an array having any three number. extract each values using while loop

 var ar = [7,8,9];
 let i = 0;
 while(i < ar.length){
    console.log(ar[i]);
    i++;
 }

//  47) create an array having any three number. extract each values using for in loop ( show both index & value in console )

 var numb = [10,11,12];
 for (const value in numb) {
    //console.log(value); --- this accesses the index
    var elem = numb[value];
    //console.log(elem);--- this prints the element of the array;
    console.log(elem+" "+value);
 }

//  48) create an array having  any three number. use any loop and show the sum of all value in console  ----DOUBT

var threenumb = [1,2,3];
let sum=0
for(let key in threenumb){
   sum = sum+threenumb[key];
   console.log(sum); 
   
}

// 49) generate a series from 1 to 10 & show square of odd number , cube of even no ( hint: use any loop & modulus opearator )

for(let i=1;i<11;i++){
    // console.log(i);
    if(i%2==0){
        var cube=i*i*i;
        console.log(cube);
    }
    else{
        var square=Math.pow(i,2);
        console.log(square);
    }

}

// 50) create an array with any three value . on button click add value 10 within an array (i.e at the end )

function addinarray(){
var addarr=[1,2,3];
addarr.push(10);
console.log(addarr);

}

// 51) create an array with any three value . on button click add value 20 within an array (i.e at start position 
function addinstart(){
   var add20 = [4.5,6];
   add20.unshift(20);
   console.log(add20); 
}

// 52) create an array with any five value . on button click remove last value

function removelast(){
    var remlast = [7,8,9];
    remlast.pop();
    console.log(remlast);
}

// 53) create an array with any five value . on button click remove first value

function removefirst(){
    var remfirst=[1,2,3];
    remfirst.shift();
    console.log(remfirst);
}

// 54) create an array with five value (i.e 10,20,30,40,50) . now search value 10 & 100 from the given array & print its position.
// DOUBT
// var fiveelement = [10,20,30,40,50];
// for (const key in fiveelement) {
//     // console.log(key);
//      var el=fiveelement[key];
//     // console.log(el);
//     fiveelement.find(el==10 && el==100)
//     console.log()
// }

// 55) create a text box , get value from the same. do the validation for mobile number & show result in paragraph ( below textbox)

function validatemobileno(){
    
    var mb=document.getElementById('txt4').value;
    mb = Number(mb);
    // console.log(mb);
    if(isNaN(mb) || mb.length<11){
     document.getElementById('para4').innerText = " please enter a valid mobile number";
    }
    else{
        document.getElementById('para4').innerText = mb;
    }

}

// 56) create a text box , get value from the same. do the validation for emailid  & show result in paragraph ( below textbox)

function emailvalidation(){
    var regmail = /^[a-zA-Z]+@[a-zA-Z0-9]+.com+$/
    var mail = document.getElementById('emailid').value;
    var email = regmail.test(mail);
    // console.log(email);
    if(email == true){
        document.getElementById('para5').innerHTML="email submitted";
    }
    else{
        document.getElementById('para5').innerHTML="invalid email";
    } 
}

// 57) create a text box , get value from the same. do the validation for name  & show result in paragraph ( below textbox)
 
function namevalidation(){
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var nam = regName.test(name);
    if(nam == true){
        document.getElementById('para6').innerHTML ="name submitted";
    }
    else{
        document.getElementById('para6').innerHTML =" please enter characters only";
    }
}

// 58) generate an array with value [10,20,30,40,50,60,70] and do the sum using reduce() function of javascript
// DOUBT

// 59) generate an array with value [1,2,3,4] and show the result as new array=> [1,4,9,16] using for in loop , forEach loop and map() function 
// DOUBT

// var val = [1,2,3,4];
// var newarr = val.map(x=>x*x);
// console.log(newarr);

// var val=[1,2,3,4];
// var newarr = val.map(val.forEach(element => {
//     element*element;
// })
// )
// console.log(newarr);

// 60) generate an array with value [1,4,6,8,12,11,13] and show the resuke as new array=> [1,11,14] using filter() function of javascript
//DOUBT

// 61) generate an example to show the difference between parseInt() & Number() function (Hint: take any value as an input)

// The parseInt() method parses up to the first non-digit and returns the parsed value.  
    // Number() converts the string into a number, which can also be a float BTW.
    
    function intcheck(){
        var numb = document.getElementById('txt5').value;
        console.log(numb);
        var numbervar =Number(numb);
        var parseintvar = parseInt(numb);
        if(isNaN(numb)){
            document.getElementById('p4').innerText ="please enter only numbers";
        }
        else{
            document.getElementById('p4').innerHTML = "this is number() result" +" "+numbervar+" "+"this is parseint() result"+parseintvar;
        }
      
    }
    //   62) create a custom function having name calculate() and pass 2 parameter (e.g: 10,20 ) within function & do the multiplication process.
    // show the result in console. (Hint: use pass by value)

    function calculate(x,y){
         console.log(x*y);
    }
    calculate(10,20);
// 63) how to create an array using ( new Array() functionality ) in javascript?
// please write down sample code with some value in array.

var singers = new Array("kk","shreya","kumarsanu");
console.log(singers);


// 64) create an object ( custom object  ) in javascript with key (name,age,location ) with any value . show the result in console

var person ={name:"vidhya",
            age:24,
            loaction:"airoli"
}
console.log(person);
console.log(person.name);
console.log(person[0]);

// 66) on mousemove event get x coordinate & y coordinate , and show the result in paragraph.
function showcoordinates(event){
    var e = event.clientX;
    var f = event.clientY;
    document.getElementById("dumby").innerHTML = "x coords :" + e +"y coords :"+ f;
}

// 67) create a textbox, enter dummy content and use onkeyup event to show 2 result:
// 	a) data in capital case ( in paragraph having id para1)
// 	b) data in small case ( in paragraph having id para2)

function changecase(){
    var txt=document.getElementById("txtb").value;
    var pb1=txt.toUpperCase();
    var pb2= txt.toLowerCase();
    document.getElementById('para11').innerHTML=pb1;
    document.getElementById('para12').innerHTML=pb2;
}




    










































