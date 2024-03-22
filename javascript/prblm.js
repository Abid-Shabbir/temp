//Example :=============>1
//in this example we will check even or odd number;

// var a = prompt('enter the any number')
// var rslt = (a%2 == 0?`${a}:is even number`:`${a}:is odd number`);
// alert(rslt);

/*Example :===========>2
in this example we will check prime number*/
// var nmbr = prompt('enter the number')

// if(nmbr == 1){
//      document.write(`${nmbr}:is niether a prime number or nor a composite number`)
// }
// else if (nmbr <= 1){
//      document.write(`${nmbr}:is not a prime number `)
// }
// else if (nmbr == 0){
//     document.write(`${nmbr}:is not a prime number `)

// }
// else if (nmbr%2==0){
//     document.write(`${nmbr}:is a not prime number `)
// }
// else {

//     document.write(`${nmbr}:is a  prime number `)

// }

/*Example:===========================>3
in this example we will find factorial of any number;*/
// var nmbr = prompt('Enter the number')
// var fact = 1;
// if (nmbr == 0) {
//     document.write(`The factorial of ${nmbr} is :1`)
// }
// else if (nmbr < 0) {
//     document.write('The factorial of the negative number is not possible')
// }
// else {
//     for (var i = 1; i <= nmbr; i++) {
//         fact = fact * i;
//         console.log(`the factorial of ${nmbr} is :${fact}`)
//     }
// }

//in this program we will find factorial of any number;
var num = prompt('Enter the any number');
const fact = 1;
if (num == 0) {
    document.write(`the factorial of ${num} is : 1`)
}
else if (num < 0) {
    document.write('the factorial of negative number is not possible')
}
else {
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
        console.log(`the factorial of ${num} is : ${fact}`)
    }
}

