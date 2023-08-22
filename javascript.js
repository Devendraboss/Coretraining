//  var x=1;

// {
//     for(i=0;i<=100;i++)
//     let y= i*2;

//     console.log(i);
// }


// var x=1;
// do{

//     console.log(x);
//     x++;
// }
// while(x<=100);
//1 . Write a for loop that prints numbers from 1 to 10 //

var i = 1;
for (i; i <= 10; i++) {
    // console.log(i);
}


//3 . Write a for loop that prints even numbers from 2 to 20.//

for (let i = 1; i <= 10; i++) {
    const sum = i + i;
    // console.log(sum);
}

//4 .  Write a for loop that generates the multiplication table for a given number (e.g., 5).//

for (let x = 1; x <= 10; x++) {
    const sum = x * 5;
    // console.log(sum);

}
//Write a for loop that prints numbers from 10 to 1 in reverse order.//
// let a = 1;

// for(a=10;a>=1;a--)
// {
//     console.log(a);

// }

//Write a for loop that calculates and prints the factorial of a given number (e.g., 5 factorial //

// let f=1;
// for(let i=1;i<=5;i++){
//    f=f*i;
//     console.log(f);
// }


//print sum of 1 to 100 numbers //
//  let sum = 0;
//  for(let i=1;i<=100;i++)
//  {
//     sum=sum+i;

//  }
//  console.log(sum);

//  //add two No. using function..//

//  var x=20;y=30;
//  function add (a,b)
//  {
//     let sum=a+b;
//     console.log(sum);
//     return sum;
//  }
//  add(x,y);

//  //print sum of 1 to 100 numbers //
//  let a=1; b=100;
//  function total(a,b)
//  {
//     for(i=a;i<=b;i++)
//     console.log(sum);
//     return(sum);
//  }
//  total(a,b);



//Sum of Even Numbers//

let sum = 0;
let n;
function SumOfEvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0)
            sum += i;
    }
    return sum;
}
let total = SumOfEvenNumbers(20);
// console.log(`even_no. ${total}`);
// Factorial Calculation

// function factorial(n)
// {
//     for(let i=1;i<=5;i++)
//     let f=f*i;
// }
//   console.log(f);

// factorial (i);


function EvenNumber(f) {

    let res = 1;
    for (let i = 1; i <= f; i++) {
        res = res * i;
    }

    return res;

}

let f = 5;

let result = EvenNumber(f);


console.log('result', result);

function table(tableOf) {

    for (let i = 1; i <= 10; i++) {

        // console.log(i*tableOf)

    }

}

let t = 8;
table(t);


let arr = [2, 3, 2, 5, 8, 2, 5, "string", true,{name:"abc"},999]

console.log("whole array",arr[9].name);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    
}
console.log("before",arr);

arr.pop()
arr.pop()
arr.pop()
arr.pop()
arr.pop()

console.log("after",arr);


let obj ={
 
   name: "Nirved",
   no: 3433532,
   status: true,

}

// console.log(obj.name);