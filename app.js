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


// function toFindArea(a,b,c){


//     var S = ( a + b + c ) / 2

//     var area = S* (S-a)*(S-b)*(S-c)
// document.write("area of triangle is : "+ area)

//  }
//  var side1 = +prompt("Enter a :");
//  var side2 = +prompt("Enter b :");
//  var side3 = +prompt("Enter c :");

//  toFindArea(side1,side2,side3)



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



//************************** Task : 05 ********************** */

// function indexOf(word) {
//     var text = "The quick brown fox jumps over the lazy dog."
//     var flag = false;
//     for (var i = 0; i < text.length; i++) {
//         if (word == text.slice(i, i + word.length)) {
//             flag = true
//             document.write("Text is : " + text + "<br> Index of "+ word+ " is : "  + text.indexOf(word))
//             break
//         }

//     }
//     if(flag == flase){
//         document.write("word not match")
//     }

// }

// var userInput = prompt("Which word's index of text you want to know\nText is : The quick brown fox jumps over the lazy dog.")
// indexOf(userInput)


//************************** Task : 06 ********************** */

// function removeVowel(sentence){

//    document.write(sentence.replace(/[aeiou]/g,""))
// }

// var userInput = prompt("Enter your sentence less than 26 words").toLowerCase();
// removeVowel(userInput)



//************************** Task : 07 ********************** */

// function findArr(text) {
//     var arr = ["a", "e", "i", "o", "u"]
//     var arr2 = ["a", "e", "i", "o", "u"]

// var flag = false

//     for (var a = 0; a < text.length; a++) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//                 if (text.slice(a, a + 2) === arr[i] + arr2[j]) {
//                     flag = true
//                     document.write(text.slice(a, a + 2)+" found at index number "+ a+"<br>")
//                     break
//                 }
//             }
//         }
//         if(flag=false){
//             document.write("no two vowels in succession in a line of text found")
//         }
//     }
// }

// var userInput = prompt("Enter your sentence to find two vowels in a word","Pleases read this application and give me gratuity");
// findArr(userInput)



//************************** Task : 08 ********************** */

// function convrtInMtr(km){
// var meters = km*1000
// return meters
// }
// function convrtInFt(km){
//     var feet = km*3280.84
//     return feet
//     }
// function convrtInInch(km){
//     var inches = km*39370.1
//     return inches
//     }
// function convrtInCm(km){
//     var centimtr = km*100000
//     return centimtr
//     }


// var userInput = prompt("Enter distance between two cities")

// function convert(calc){
// var kilometer = calc
// document.write("kilometer : "+ kilometer+"<br> meter : " + convrtInMtr(kilometer)
// +"<br> feet : " +convrtInFt(kilometer)+"<br> inches : " +convrtInInch(kilometer)
// +"<br> centimeter : " +convrtInCm(kilometer))
// }
// convert(userInput)


//************************** Task : 09 ********************** */


// function calcPay(){
// var overHours = 40;
// var rateHour = 12.00;
// var totalPay = overHours*rateHour

// document.write("overtime pay of employees for "+overHours+" hours Rs."+totalPay)
// }

// calcPay()


//************************** Task : 10 ********************** */

// function amount(value) {

//     if (value.length === 3) {

//         document.write("You will have " + value.charAt(0) + " hundred notes ")

//         if (value.charAt(1) > 4) {

//             document.write(1 + " fifty note ")
//         }

//         if (value.charAt(1) > 5) {
//             document.write(value.charAt(1) - 5 + " ten notes.")
//         }
//         else if (value.charAt(1) > 0 && value.charAt(1) < 5) {
//             document.write(value.charAt(1) + " ten notes.")
//         }

//     } else { alert("Please enter amount in hundreds, i.e.100-990") }


// }

// var userInput = prompt("Enter amount to withdrawn in hundred", "500")
// amount(userInput)