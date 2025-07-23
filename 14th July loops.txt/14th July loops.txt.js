// 1. print 1-10 numbers
let i 
for(i=1; i<=10; i++)
{
    console.log(i)
}
console.log('')
// 2.print 10-1 numbers
let j = 10
while(j>=1)
{
console.log(j)
j--
}
console.log('')
// 3. print 1 to 5 using do while loop

let num = 1
do{
    console.log(num)
    num++
} while(num<=5)

    console.log('')
//  4.Print even numbers b/w 0-50

let E
for(e=0; e<=50; e+=2)
{
console.log(e)
}

console.log('')

// 5. print odd numbers b/w 1-20

let odd 
for(odd=21; odd<=50; odd+=2)
{
    console.log(odd)
}

console.log('')
// 6. print number which division by 3 b/w 1-30
let div
for(div=3; div<=30; div+=3)
{
    console.log(div)
}

console.log('')

// 7. print the sum of 1-100 number

let sum =0
for(i=1; i<=100; i++)
    sum+=i
{
    console.log('Sum of 1-100 number is :', sum)
}

console.log('')

// 8. print the multiplication 1-10 number

let mul =1
for(i=1; i<=10; i++)
    mul*=i
{
    console.log('Multiplication of 1-10 number is :', mul)
}

console.log('')

// 9. Print the sum of all even number b/w 1-50

let summ = 0
for(i=0; i<=50; i+=2)
    sum+=i
    {
    console.log('The sum of all even number b/w 1-50: ',sum )
}

console.log('')

// 10. Find the sum of squares of numbers from 1 to 10.

let sumofsquare = 0
for(i=1;i<=10;i++)
    sumofsquare += i*i
{
    console.log('The sum of square 1-10: ',sumofsquare)
}

console.log('')

// 11. Print numbers from 1 to 20, skip multiples of 4 using continue.

for(i=1; i<=20;i++)
{
    if(i % 4 == 0)
        continue;
    {
         console.log(i)
    }
}

console.log('')

// 12. Print numbers from 1 to 10, stop at 7 using break.

for(i=1; i<=10;i++)
{
    if(i==7)
        break;
    {
         console.log(i)
    }
}

console.log('')

// 13. Count how many numbers between 1 and 100 are divisible by both 3 and 5.

let count = 0
for(i=1; i<=100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
        
    {
        count++
    }
    
}
console.log( 'The number are divisible by both 3 and 5: ',count)

console.log('')

// 14. Print all pairs (i, j) where i and j go from 1 to 3.

for(i=1; i<=3; i++)
{
    for(j=1; j<=3; j++)
    {
        console.log('The pair is : ','(${i}, ${j}) ')
    }
}