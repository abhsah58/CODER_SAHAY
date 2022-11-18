// </*
// //1. ways to print in JavaScript
// console.log('abhishek kumar sahay');
// alert('alert');
// document.write("This is document write");

// //2. JavaScript console API
// console.log("hello world", 4+9, "another log");
// console.warn("this is a warning");
// console.error("this is an error");

// //3. JavaScript variables
// // containers to store data values
// var number1 = 21;
// var number2 = 23;
// console.log(number1+number2);

// //4. Data types in JavaScript

// //number
// var num1 = 336;
// var num2 = 300;

// //string
// var str1 = "this is a string";
// var str2 = "this is a string 2";

// //objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.97
// }

// //logical variables
// var flag1 = true;
// var flag2 = false;

// console.log(flag1,flag2);

// var n1 =undefined;// this variable is not still not defined 
// console.log(undefined);
// console.log('n1 =',n1);

// var n2 = null; //kuch bhi nahi rakha sakate ho isme tum
// console.log(null);
// console.log('n2 =',n2);

// // At a very high level, ther are twoo types of data types in JavaScripts 
// // 1. primitive data type: undefined, null, number, string, boolean, symbol
// // 2. reference data type: array and objects

// var arr =[1,2,'bablu',4,5];
// console.log(arr);


// //operators in javaScript

// //1. arthemetic operator
// var a = 32;
// var b = 21;
// console.log("the value of a+b =",a+b);
// console.log("the value of a-b =",a-b);
// console.log("the value of a*b =",a*b);
// console.log("the value of a/b =",a/b);

// var c = b;
// console.log("c= ",c);
// c +=5;
// console.log("c= ",c);

// //comparision operator
// var x = 34;
// var y = 35;
// console.log(x==y);//>= > <= etc.

// //logical and &&
// //logical or  ||
// //logival not !

// console.log(avg(4,6),avg(9,18));

// function avg(a1,b1)
// {
//     document.write("(a1+b1)/2 = \n",(a1+b1)/2);
//     return (a1+b1)/2;
// }


// //all syntax of if else conditions are similar to c++

// function is_kid(age1)
// {
//     if(age1>18)
//     return "you are not a kid";
//     else
//     return "you are a kid";
// }

// console.log(is_kid(19));

// // for (var i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(element)
// {
//     console.log(element);
// })

// console.clear();

// let j = 0;
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }
// console.log('mera number', j);
// j--;

// do{
//     console.log(arr[j]);
//     j--;
// }while(j>-1)

// */
// /*
// //Array Method
// let myArr =["fan","camera",34,null,true];

// console.log(myArr.length);
// myArr.pop();
// myArr.push("sahay");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("abhishek");
// console.log(myArr);

// const newlen = myArr.unshift("shiv");
// console.log(newlen);

// console.log(myArr.toString());
// console.log(myArr.sort());

// //string mentod in JavaScript
// let myLovelyString = 'Harry is a good boy good good';
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf('r'));
// console.log(myLovelyString.lastIndexOf('good'));
// console.log(myLovelyString.slice(1,10));
// //replace 
// myLovelyString = myLovelyString.replace('good','bad');
// console.log(myLovelyString);

// //Date in JavaScript
// let myDate = new Date();
// document.write(myDate.getDay(),',');
// document.write(myDate.getDate(),':',myDate.getMonth(),':',myDate.getFullYear());
// */


// //DOM Manipulation
// let ele = document.getElementById('click');
// console.log(ele);

// let eleClass = document.getElementsByClassName('container');
// console.log(eleClass);
// // eleClass[0].style.background = "yellow";

// eleClass[0].classList.add('bg-primary');
// eleClass[0].classList.remove('bg-primary');

// console.log(eleClass[0].innerHTML);
// console.log(eleClass[0].innerText);

// let tn = document.getElementsByTagName('div')
// console.log(tn);


// function clicked(){
//     console.log("button was clicked");
// }

// window.onload = function(){
//     console.log('the file was loaded');
// }


// //events in javascripts
// // firstContainer.addEventListener('click',function(){
// //       console.log("clicked on container");
// // })

// // firstContainer.addEventListener("mouseover", function(){
// //    console.log ('Mouse on container');
// // } )

// // firstContainer.addEventListener("mouseout", function(){
// //     console.log('mouseout');
// // } )

// // let preHTML = document.querySelectorAll('.container')[0].innerHTML;

// // firstContainer.addEventListener('mouseup', function(){
// //     document.querySelectorAll('.container')[0].innerHTML = preHTML;
// //     console.log('mouse up when clicked in container');
// // } )

// // firstContainer.addEventListener('mousedown', function(){
// //     document.querySelectorAll('.container')[0].innerHTML = '<b> you are on the page </b>'
// //     console.log('mousedown');
// // } )

// //Arrow function

// function summ1(a,b){
//     return (a+b);
// }


// summ2 = (a,b)=>{
//     return a+b;
// }

// let preht =  document.querySelectorAll('.container')[0].innerHTML;
// logkaro = ()=>{
    
//     document.querySelectorAll('.container')[0].innerHTML = "<b> set interval fired </b>";
//     console.log("I am your log");
//     // document.querySelectorAll('.container')[0].innerHTML = preht;
// }

// //SetTimeout and Setinterval
// //clr = setInterval(logkaro,1000);
// //clr = SetTimeout(logkaro,2000);
// // use clearInterval(clr) / clearTimeout(clr) to cancel setInterval/ setTimeout




// // Java Script local storage
// // localStorage.setItem('name', 'harry')
// // localStorage.clear()
// // localStorage.getItem('name')


// //Json:  Json file is used for ease transport of code by converting the code into an string
// obj = {name: 'harry1' ,length: 1};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// console.log("transfer of data from json to code")
// parsed = JSON.parse( jso);
// console.log(parsed);

// >