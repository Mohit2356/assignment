const prompt = require('prompt-sync')()

// 1. check age for vote

let age = prompt('Enter the Age')
if(age >= 18){
    console.log('You are eligible for vote')
}
else{
    console.log('You are not eligible for vote')
}


// 2. Check the grade based on percentage

let p = prompt('Enter the percentage')
if(p>=0 && p<=30){
    console.log('Fail')
}
else if(p>=31 && p<=50){
    console.log('grade C')
}
else if(p>=51 && p<=70){
    console.log('grade B')
}
else if(p>=71 && p<=90){
    console.log('grade A')
}
else if(p>=91 && p<=100){
    console.log('grade A+')
}


// 3. check if a number positive, negative and Zero

let n = prompt('Enter the number for check number is positive or negative')
if(n>0){
    console.log('This is Positive Number')
}
else if(n<0){
    console.log('This is Negative Number')
}
else{
    console.log('This number is Zero')
}


// 4. Check the month based on number 1-12

let month = parseInt(prompt('Enter the number b/w 1-12 for check month - '))
switch (month) {
    case 1: console.log('January')
        break;
        case 2:
             console.log('Febuary')
        break;
        case 3: 
        console.log('March')
        break;
        case 4:
             console.log('April')
        break;
        case 5:
             console.log('May')
        break;
        case 6:
             console.log('June')
        break;
        case 7:
             console.log('July')
        break;
        case 8:
             console.log('August')
        break;
        case 9:
             console.log('September')
        break;
        case 10:
             console.log('October')
        break;
        case 11:
             console.log('November')
        break;
        case 12:
             console.log('December')
        break;
default:
    console.log('Number Invalid')
        break;
}


// 5. check number is even or odd

let aa = prompt('Enter the number for check number is even or odd')
if(aa%2==0){
    console.log('Number is Even')
}
  else{
    console.log('Number is Odd')
}


// 6. Check number which divisoble by 5 and 11

let num = prompt('Enter the number')
if (num % 5 === 0 && num % 11 === 0) {
    console.log("The number is divisible by both 5 and 11.")
} 
else {
        console.log("The number is  not divisible by both 5 and 11.")
}

// 7. Find the largest of three number

let a = prompt('Enter the First Number')
let b = prompt('Enter the Second number')
let c = prompt('Enter the Third number')
let largest
if(a>b && a>c)
{
   largest = a
}
else if(b>a && b>c)
{
    largest = b
}
else{
    largest = c
}
console.log('The largest number is' + largest)


// 8. Check a character is vowel or consonant

let char = prompt('Enter the Character')
if(char =='a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U') 
{
    console.log( char + ' is a vowel')
}
else{
    console.log( char + ' is a consonant')
}
console.log('')

// 9. Check the numbers are equal 

let n1 = prompt('Enter the First number-')
let n2 = prompt('Enter the Second number-')
if(n1==n2)
{
    console.log('Numbers are Equal')
}
else{
    console.log('Numbers are not Equal')
}

// 10. Number range Validator

let no = prompt('Enter the number')
if(no>=1 && no<=10)
{
    console.log(no  + ' In the Range')
}
else{
    console.log(no  + ' Out the Range')
}