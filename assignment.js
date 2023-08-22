//Sum of Even Numbers//

// function EvenNumber(n)
// {
//     console.log("number",n);
//     for(let i=1; i<=100; i++)
//  {
    
//     // if ( i%2==0)
//     // sum=+i;
   
//  }
// }
// let res = EvenNumber(5)
// console.log(`EvenNumber ${res}`);

//Factorial Calculation//

// function factorial(n)
// {
//   let i=1;
//     for(i;i <= n; i++);
//     let factorial=1;
//     {
//       factorial=factorial * i;   
//     }  
    
//     console.log(factorial);

// }
// const n=5;
// factorial(n);

//Reverse String//

// function ReverseString(n)
  
// {
//   return n.split("").reverse();
// }
// const result= "Hello i am dev"
// let dev = ReverseString(result);
// ReverseString(dev);
// console.log('${result}');

//Prime Number Check//
// function PrimeNumberCheck(n){
//   for(let i=1;i<=n;i++)
//   {
//     if(i%n==0){
//       console.log("number is prime");
//     }
//     else{
//       console.log(i);
//     }
//   }

// }
// PrimeNumberCheck(5)

//FizzBuzz//
// function FizzBuzz(n){
//   for(let i=1; i<=n; i++){
//     if(i%3==0 && i%5==0){
//  console.log("Fizzbuzz");
//   }
//   else if(i%3==0)
//   {
//  console.log("Fizz");
//   }
// else if(i%5==0){
//   console.log("Buzz");
//   }
//   else {
//     console.log(i);
//   }
//   }
// }
// FizzBuzz(17)

//Palindrome Check//
// function PalindromeCheck(n)
    // var length = n.length;
// {
//  for(let i=0;n.lenth;i++){
//   if (i=n.length-1)
//   console.log("true");
//  }
//   {
//   console.log("false");
//  }

// }
// PalindromeCheck('nitin')

//Fibonacci Sequence//

//Count Character Occurrences//

// function CountCharacter()
// {


// }
//Multiplication Table//
// function MultiplicationTable(n)
// {
//   for(let j=2;j<=n;j++){
//   for(let i=1;i<=10;i++){    

// result = j * i;             
// console.log(result);          
                              
//   }
// }

// }

// MultiplicationTable(10);

//Capitalize Words//
// function CapitalizeWords(sentance)
// {
//  let words = sentance.split(" ")
//  let Capitalizesentence = " ";
// }
// for(i=1;i<=words.length;i++){
  
// }

// CapitalizeWords("My name is dev")

//Write a function that takes an array of numbers as input and returns
 //the maximum number in the array //

// function printNumberinarray(n) 
// {
//  var dev = [];
//  for(var i=0;i<=n;i++){
//     dev.push(i);
    
//  }
//  console.log(dev);
 
// }
// printNumberinarray(100);

// function maxNumber(n) 
// {
//     let num=0;
//     for(let i= 0;i <n.length;i++){
//     if(n[i]>=num){
//         num = n[i];
//     }
//     }
//     return num;  
 
// }

// const n=[40,50,80,72,95,78];
// console.log (maxNumber(n));

// maxNumber(n)

// function catalanNumber(n)
// {
//     let res = 0;
//     for(i=0; i<n; i++){
//         i=i-1;
//         res +=i*i-1;
//         console.log(res)
//     }
// }



// catalanNumber(5)

// Write a JavaScript program to delete the rollno property from the following object. Also
// print the object before or after deleting the property.

// var i= {
//     Name:"Devbhaiyya",
//     Rollno:44,
//     class:12,
//     Address:"patan",


// };

// delete i.Rollno;
// console.log(i);

//Write a JavaScript program to get the length of a JavaScript object.//
// var i= {
//     Name:"Devbhaiyya",
//     Rollno:44,
//     class:12,
//     Address:"patan",
// };
// var length = Object.keys(i).length;
// console.log(length);


// Write a JavaScript program to display the reading status (i.e. display book name,
    // author name and reading status) of the following books.
// var library = [
//     {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//     },
//     {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: false
//     },
//     ];
//     var display = library[0];
// console.log(display);    

// Write a JavaScript program to get the volume of a cylindrical with four decimal places
// using object classes.

// var r,h;
// var π = 3.14;
// var i = [{
//     r:5,
//     h:15,
//     v:r*h

// }];
// var volume = π*2*5*15;
// console.log(volume);
