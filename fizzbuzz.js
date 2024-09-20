// 1) When a user inputs a number
// 2) Loop from 1 to the entered number
// 3) If the current number is divisible by 3 then print "Fizz"
// 4) If the current number is divisible by 5 then print "Buzz"
// 5) If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6) Otherwise print the current number



//1)Getting input from the user --> we’ll use the “prompt” method:
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
//The above code should create a little popup box that asks the user for a number. The input we get back will be stored in our variable answer.

for (let i = 1; i <= answer; i++) {
//If the current number is divisible by 3, then print Fizz:
if (i % 3 === 0 && i % 5 ===0){
    console.log("FizzBuzz");
} 
//If the current number is divisible by 5 then print Buzz.
else if (i % 3 === 0) {
    console.log("Fizz");
}
//If the current number is divisible by 3 and 5 then print FizzBuzz.
else if (i % 5 === 0){
    console.log("Buzz");
}
else {
    console.log(i);
}
  }



