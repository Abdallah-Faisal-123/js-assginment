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

