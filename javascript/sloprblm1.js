/*By using javascript we will find Area of Triangle
only right angle triangle we will use this formul 
Exercise: ====> 1 */

// var base = prompt("Enter the base value");
// var height = prompt("Enter the height value");
// var area = (base * height)/2;
// console.log(`base is: ${base} heignt is: ${height} area of triangle is: ${area}`) 

/*To find and type of triangle we will use second formul that to be general
formula is :Area = squre root of s(s-a)*(s-b)*(s-c); is called heron's formula*/

// var a = 30;
// var b = 20;
// var c = 30;
// const s = (a+b+c)/2;
// var temp = s*(s-a)*(s-b)*(s-c);
// var area = Math.sqrt(temp)
// console.log(area)

//Example:====================> (2)
/*In this example we will swap two number by using  using temporary variable 
 */

// var a = 5;
// var b = 10;
// document.write(`"Before swapping "the value of a is ${a} and the value of b is:${b}`)
// var x = a;
// var a = b;
// var b = x;
// document.write(`"After swapping "the value of a is ${a} and the value of b is:${b}`)

/*In this example we will swap two number by using without using temporary variable 
 */

//  var a = 10;
//  var b = 20 ;
//  document.write(`"Before swapping "the value of a is ${a} and the value of b is:${b}`)
//  var a = a+b;//(10+20) | a = 30
//  var b = a-b;//(30 - 20)| b = 10
//  var a = a-b;//(30 - 10)| a = 20
//  document.write(`"After swapping "the value of a is ${a} and the value of b is:${b}`)

/* In this example we will convert Kliometer into miles by using methode
Example NO:==============================>(3)
*/
// let convert = () =>{
//     var kms = document.getElementById('data').value;
//     const fctr = 0.621371;
//     var miles = kms * fctr;
//     document.getElementById('rslt').innerText=`${miles} miles`
// }

/* in this example we will use promise mehtod promise has three stages pending ,fulfillment and rejection*/

function prom(a,b) {
    return new Promise((resolve, reject) => {//after calling function promise restrun value on bases of condtion
        //if the codition resolve then the fulfillment function will be call and if the function 
        //reject the rejection function will be called
        console.log("Fetching data,Please wait")
        var c = a/b;
        setTimeout( ()=>{
            (a,b) ? resolve(`your answer is : ${c}`) : reject(`failed to calculate`)
        },2000)
       
    });
}
 
var onfulfillment = (result)=>{
    console.log(result)
}
var onRejection = (error)=>{
    console.log(error)
}

prom(9,3).then(onfulfillment).catch(onRejection);//here here called a prom function
//the function the creat is the open condition the it return the basic value that t