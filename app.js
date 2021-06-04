//************************** Chapter : 38-40 ********************** */


//************************** Task : 01 ********************** */

// function power(a,b){

//     document.write(a+ "'s power "+ b +" = "+ Math.pow(a,b))
// }
// var num = prompt("enter number")
// var pow = prompt("enter power")
// power(num,pow)


//************************** Task : 02 ********************** */

// function leapYear(userInput){
//     if(userInput % 4 == 0){
//         document.write("It's a leap year")
//     }else{
//         document.write("It's not a leap year")
//     }
// }
// var userInput = +prompt("Enter year")
// leapYear(userInput)


//************************** Task : 03 ********************** */


function toFindArea(a,b,c){

    // var sum = a+b+c
    var S = ( a + b + c ) / 2

    var area = S* (S-a)*(S-b)*(S-c)
document.write("area of triangle is : "+ area)

 }
 var side1 = +prompt("Enter a :");
 var side2 = +prompt("Enter b :");
 var side3 = +prompt("Enter c :");

 toFindArea(side1,side2,side3)


//  function toFindS(){

//  }


//************************** Task : 04 ********************** */


// function sum(a, b, c) {

//     var total = a + b + c
//     document.write("obtain marks " + total + "<br> percentage is : " + per(total) + "<br> average is : " + avg(total))

// }
// var sub1 = +prompt("Enter obtain mark of english")
// var sub2 = +prompt("Enter obtain mark of math")
// var sub3 = +prompt("Enter obtain mark of science")
// var tmarks = +prompt("Enter total marks")
// sum(sub1, sub2, sub3)


// function per(tt) {
//     var persentage = (tt / tmarks) * 100
//     return persentage
// }

// function avg(tt) {
//     var average = tt / 3
//     return average
// }



