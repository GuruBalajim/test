// 2. ⁠Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// Question : [1,2,3,4]
// Answer: [2,4]
let a = [1,2,3,4];
printEven(a);

function printEven(a){
  let i;
  for(i=0;i<a.length;i++){
    if(i%2==0){
      console.log(i);
    }
  }  
}