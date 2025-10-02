//================= question 1===================
var num = window.prompt("1-enter your input");
console.log(num)

//================= question 2 ===================
var num = +window.prompt("2-enter number that can divide by 3 and 4");

if(num % 4 === 0 && num % 3 === 0 )
{
   console.log("Output: Yes");
}
else
{
    console.log("Output: No");
}
//================== question 3 ===================
var num1 = +window.prompt("3-enter your first number ");
var num2 = +window.prompt("3-enter your last  number ");

if(num1 > num2)
{
    console.log("max num is : " + num1);
}
else if(num1 < num2)
{
    console.log("max num is :" + num2);
}
else if(num1 == num2)
{
    console.log("Equals");
}
else 
{
    console.log("invalid num");
}

//================ question 4 =======================

var num = +window.prompt("4-enter your negative or positive number");

if(num > 0)
{
    console.log("positive");
}
else if(num < 0)
{
    console.log("negative");
}
else
{
    console.log("invaled");
}

//=============== question 5 ========================

var num1 = +window.prompt("5-enter your first number ");
var num2 = +window.prompt("5-enter your second number ");
var num3 = +window.prompt("5-enter your last  number ");

//max
if(num1 > num2 && num1 > num3)
{
    console.log("max num is : " + num1);
}
else if(num2 > num1 && num2 > num3 )
{
    console.log("max num is :" + num2);
}

else if(num3 > num2 && num2 > num1 )
{
    console.log("max num is :" + num3);
}


//min
if(num1 < num2 && num1 < num3)
{
    console.log("min num is : " + num1);
}
else if(num2 < num1 && num2 < num3 )
{
    console.log("min num is :" + num2);
}

else if(num3 < num2 && num3 < num1 )
{
    console.log("min num is :" + num3);
}

else if(num1 == num2 == num3 )
{
    console.log("Equals");
}
else 
{
    console.log("invalid num");
}

//================== question 6 =================

var num = +window.prompt("6-enter your even or odd number ");

if(num %2 === 0)
{
    console.log("even")
}
else{
    console.log("odd")
}


//================= question 7 =================

var char = window.prompt("7-enter your character");


if (
  char === 'a' || 
  char === 'e' || 
  char === 'i' || 
  char === 'o' || 
  char === 'u' ||
  char === 'A' || 
  char === 'E' || 
  char === 'I' || 
  char === 'O' || 
  char === 'U'
) {
  console.log(char + " is a vowel");
} else {
  console.log(char + " is a consonant");
}

//================= question 8 ================

var num = +window.prompt("8-enter your number");

for (var i = 1; i <= num; i++) {
    
    console.log(i)
}


//================= question 9 ===================

var num = +window.prompt("9-enter your number");

for (var i = 1; i <= 12; i++) {
    
    console.log(i * num)
}


//==================== question 10 ==================

var num = +window.prompt("10-enter your number");

for (var i = 1; i <= num; i++) {
    
    if(i % 2 === 0){
        console.log(i)
    }
}

//==================question 11 ======================

var num = +window.prompt("11-enter your  number");
var pow = +window.prompt("11-enter your pow number");

var result = 1;
for ( var i = 1; i <= pow; i++) {
    
      result*= num;
}

console.log(result);


//==============question 12 ========================


var m1 = +prompt("12-Enter mark of student 1:");
var m2 = +prompt("12-Enter mark of student 2:");
var m3 = +prompt("12-Enter mark of student 3:");
var m4 = +prompt("12-Enter mark of student 4:");
var m5 = +prompt("12-Enter mark of student 5:");


var total = m1 + m2 + m3 + m4 + m5;


var average = total / 5;


var percentage = (total / 500) * 100;


console.log("Total marks = " + total);
console.log("Average Marks = " + average);
console.log("Percentage = " + percentage + "%");


//============== question 13 =========================

var num = +window.prompt("13-enter month number:");

switch (num) {
    case 1:
        console.log("Days in month: 31")
        break;
    case 2:
        console.log("Days in month: 28")
        break;
        case 3:
        console.log("Days in month: 31")
        break;
        case 4:
        console.log("Days in month: 30")
        break;
        case 5:
        console.log("Days in month: 31")
        break;
        case 6:
        console.log("Days in month: 30")
        break;
        case 7:
        console.log("Days in month: 31")
        break;
        case 8:
        console.log("Days in month: 31")
        break;
        case 9:
        console.log("Days in month: 30")
        break;
        case 10:
        console.log("Days in month: 31")
        break;
        case 11:
        console.log("Days in month: 30")
        break;
        case 12:
        console.log("Days in month: 31")
        break;
    default:
        console.log("invalid number")
        break;
}


//============== question 14 =========================

var physics = +window.prompt("14-Enter marks of Physics: ");
var chemistry = +window.prompt("14-Enter marks of Chemistry: ");
var biology = +window.prompt("14-Enter marks of Biology: ");
var mathematics = +window.prompt("14-Enter marks of Mathematics: ");
var computer = +window.prompt( "14-Enter marks of Computer: ");


var total = physics + chemistry + biology + mathematics + computer
var percentage = (total / 500) * 100


if (percentage >= 90)
    grade = "A"
else if (percentage >= 80)
    grade = "B"
else if (percentage >= 70)
   grade = "C"
else if (percentage >= 60)
    grade = "D"
else if (percentage >= 40)
    grade = "E"
else
grade = "F"


console.log("\nTotal Marks =", total)
console.log("Percentage =", percentage, "%")
console.log("Grade =", grade)

//============== question 15 =======================

var num = +window.prompt("15-enter month number:");

switch (num) {
    case 1:
        console.log("Days in month: 31")
        break;
    case 2:
        console.log("Days in month: 28")
        break;
        case 3:
        console.log("Days in month: 31")
        break;
        case 4:
        console.log("Days in month: 30")
        break;
        case 5:
        console.log("Days in month: 31")
        break;
        case 6:
        console.log("Days in month: 30")
        break;
        case 7:
        console.log("Days in month: 31")
        break;
        case 8:
        console.log("Days in month: 31")
        break;
        case 9:
        console.log("Days in month: 30")
        break;
        case 10:
        console.log("Days in month: 31")
        break;
        case 11:
        console.log("Days in month: 30")
        break;
        case 12:
        console.log("Days in month: 31")
        break;
    default:
        console.log("invalid number")
        break;
}



//====================== question 16 =========================

var char = window.prompt("16-enter your character");

switch (char) {
    case 'a':
        console.log(char + " is a vowel")
        break;
      case 'e':
        console.log(char + " is a vowel")
        break;
      case 'l':
        console.log(char + " is a vowel")
        break;
      case 'o':
        console.log(char + " is a vowel")
        break;
      case 'u':
        console.log(char + " is a vowel")
        break;
      
        case 'A':
        console.log(char + " is a vowel")
        break;
      case 'E':
        console.log(char + " is a vowel")
        break;
      case 'L':
        console.log(char + " is a vowel")
        break;
      case 'O':
        console.log(char + " is a vowel")
        break;
      case 'U':
        console.log(char + " is a vowel")
        break;

    default:
        console.log(char + " is a Consonant")
        break;
}



//================== question 17 ============================

var num1 = +window.prompt("17-enter your first number ");
var num2 = +window.prompt("17-enter your last  number ");

var m ;

if(num1 > num2)
{
    m = 1;
}
else if(num1 < num2)
{
    m = 2;
}
else if(num1 == num2)
{
    m = 0;
}



switch (m) {
    case 1:
         console.log("max num is : " + num1);
        break;
     case 2:
         console.log("max num is : " + num2);
        break;
    case 0:
        console.log("Equals");
        break;
    default:
        console.log("invalid number")
        break;
}



//================== question 18 ==================
var num = +window.prompt("18-enter your even or odd number ");

var n;


if(num %2 === 0)
{
  n = 1;  
}
else{
   n = 0;
}


switch (n) {
    case 1:
         console.log("odd")
        break;
    case 0:
         console.log("even")
        break;
    default:
        console.log("invalid number")
        break;
}



//============= question 19 ============================

var num = +window.prompt("19-enter your negative or positive number");


var p;


if(num > 0)
{
  p = 1;  
}
else if( num < 0)
{
   p = 0;
}

switch (p) {
    case 1:
         console.log("positive")
        break;
    case 0:
         console.log("nigative")
        break;
    default:
        console.log("invalid number")
        break;
}



//================ question 20 ==========================

var num1 = +window.prompt("20-enter your first number")
var op  = window.prompt("20-enter your operator")
var num2 = +window.prompt("20-enter your last number")

switch (op) {
    case '+':
        console.log(num1 + num2)      
        break;
        case '-':
        console.log(num1 - num2)      
        break;case '*':
        console.log(num1 * num2)      
        break;case '/':
        console.log(num1 / num2)      
        break; 

    default:
        console.log("invalid number")
        break;
}
