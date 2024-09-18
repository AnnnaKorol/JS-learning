let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;
console.log(age);

age = 54;
console.log(age);

console.log(23 + 97);

console.log(10+22+68+96+32+98);

console.log((4+6+9)/77);



let a = 10;

console.log(a);

console.log(9*a);

let b = 7*2;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual/ max;
console.log(percentage);


// unary operand:
let x = 1;
x=-x;
console.log(x); 
console.log(x);

// binary operands:
let f = 1, g = 3;
console.log(g-f);

console.log(6-'2'); //4, converts '2' to a number
console.log('1' + 2 + 2); // "122" and not "14" - The binary + is the only operator that supports strings in such a way.

//convert non-numbers  -  the operand is not a number, the unary plus converts it into a number.
//It actually does the same thing as Number(...), but is shorter.
console.log( +true); // 1
console.log(+""); //0

//convert string to numbers using the plus: 
let apples = "2";
let oranges = "3";
console.log( +apples + +oranges);//5
console.log( apples + oranges ); // "23", the binary plus concatenates strings


//chaining assignments:
let k,o,p;
k=o=p=2+2;
console.log( k ); // 4
console.log( o ); // 4
console.log( p ); // 4



//modify-in-place:
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log( n ); // 14

let m = 2;
m *= 3 + 5; // right part evaluated first, same as n *= 8
console.log( m ); // 16


//increment/decrement
//increment ++ increase value by 1:
let counter = 2;
counter++;
console.log(counter);//3

//decrement -- decrease value by 1:
let calculation = 2;
calculation--;        // works the same as counter = counter - 1, but is shorter
console.log(calculation); // 1
//!Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

//If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let count = 0;
console.log( ++count ); // 1

let countAmount = 1;
console.log( 2 * ++countAmount ); // 4

//If we’d like to increment a value but use its previous value, we need the postfix form:
let counterValue = 0;
console.log( counterValue++ ); // 0



//Answers of the exercise:
console.log("" + 1 + 0);              //"10"
console.log("" - 1 + 0);              //-1
console.log(true + false);           //1
console.log(6/"3");                  //2
console.log("2" * "3");              //6
console.log(4 + 5 + "px");           // "9px"
console.log("$" + 4 + 5);           //"$45"
console.log("4" - 2);               // 2
console.log("4px" -2);              //NaN
console.log("-9" + 5);              //"-95"
console.log("-9" - 5);               //-14
console.log(null + 1);               //1
console.log(undefined + 1);           //NaN
console.log(" \t \n" - 2);            //-2
//null becomes 0 after the numeric conversion.
//undefined becomes NaN after the numeric conversion.
// - always converts to numbers

//Extra large or extra small numbers can be written with scientific (exponent) notation:
let q = 123e5;  //12300000
let w = 123e-5; //0.00123 
console.log(q, w)


//Trying to do arithmetic with a non-numeric string will result in //? NaN (Not a Number):            
let j = 100 / "Apple";                 //NaN                         However, if the string is numeric, the result will be a number:let x = 100 / "10"; will be 10
console.log(j);

//you can use the global JavaScript function //? isNaN() to find out if a value is a not a number:
let u = 100 / "Apple";                 // true
console.log(isNaN(u));

//if you use NaN in a mathematical operation, the result will also be NaN:
let c = NaN;
let i = 5;
let z = c + i;                          //NaN
console.log(z);

//Or the result might be a concatenation like NaN5:
let r = NaN;
let t = "5";
let l = r + t;
console.log(l);                       //NaN5

const string = "The revolution will not be televised.";
console.log(string);


//Strings:                        - single quotes ('), double quotes ("), or backticks (`) to wrap your strings.which you use is down to personal preference 
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string:
const nameHis = "Chris";
const greetings = `Hello, ${nameHis}`;
console.log(greetings);                          // "Hello, Chris"

//...to join together two variables:
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); 


//You can use ${} only with template literals, not normal strings
const greetingUs = "Hello";
const nameFrom = "Chris";
console.log(greetingUs + ", " + nameFrom);  
// this also work and better for reading --> console.log(`${greetingUs}, ${nameFrom}`); // "Hello, Chris"

//TODO--------------------------------------------------------------------

//Example of the button interaction
const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

//Here, we are using the window.prompt() function, which prompts the user to answer a question via a popup dialog box and then stores the text they enter inside a given variable — in this case name. We then display a string that inserts the name into a generic greeting message.

//TODO--------------------------------------------------------------------          

//Including expressions in strings:
//You can include JavaScript expressions in template literals, as well as just variables, and the results will be included in the result:

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like this song ${song}. I gave it a score of ${(score/highestScore) *100}%`;
console.log(output);


const advert = "Happy/Pappy"
const mark = 4;
const heighestMark = 10;
const result = `I like this advertising ${advert}. I gave it a mark of ${(mark/heighestMark) *100}%`;
console.log(result);
    

//TODO--------------------------------------------------------------------        

//!String methods:

//*slice() extracts a part of a string and returns the extracted part in a new string. takes 2 parameters: start position, and end position (end not included).
let parag = "Apple, Banana, Kiwi";
let part = parag.slice(7, 13);
console.log(part);
//If you omit the second parameter, the method will slice out the rest of the string: let text = "Apple, Banana, Kiwi"; let part = text.slice(7);
//If a parameter is negative, the position is counted from the end of the string: let text = "Apple, Banana, Kiwi"; let part = text.slice(-12);
//This example slices out a portion of a string from position -12 to position -6: let text = "Apple, Banana, Kiwi"; let part = text.slice(-12, -6);


//*toUpperCase()
let content = "Hello World!";
let content2 = content.toUpperCase();
console.log(content2);


//*toLowerCase()
let info = "Tuta";
let info2 = info.toLowerCase();
console.log(info2);

//*concat() -  joins two or more strings:
let message = "Love";
let message2 = " saves the World!";
let message3 = message.concat("",  message2);
console.log(message3);

//*trim()  -  method removes whitespace from both sides of a string:
let mail = "            Hello Mam"
let mail2 = mail.trim();
console.log(mail2);

//*trimEnd() and trimStart() works almost the same but delete text in the beginning or at the end;

//*padStart() or //padEnd() :
let textBig = "5";
let padded = textBig.padStart(4,"x");
console.log(padded);                      //xxx5

//!The padStart() or //padEnd() methods are a string method. To pad a number, convert the number to a string first:
let num = 5;
let textOrigin = num.toString();
let paddedText = textOrigin.padStart(4, "0");
console.log(paddedText);



//*repeat()   1)a string with a number of copies of a string; 2)returns a new string; 3)does not change the original string.:
let details = "Achtung!"
let result2 = details.repeat(4);
console.log(result2);

//*replace()  - 1)does not change the string it is called on.; 2)returns a new string; 3)replaces only the first match.


//*replaceAll():
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

//*split()
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")  // Split on pipe 


//TODO--------------------------------------------------------------------   

//!Comparisons - return a boolean value;
let result1 = 5 > 4; // assign the result of the comparison
console.log( result1 ); // true

console.log( null == undefined ); // true
console.log( null === undefined ); // false
//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

//*null:
//Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
console.log(null > 0 );  // (1) false
console.log(null == 0 ); // (2) false
console.log(null >= 0 ); // (3) true
//On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.


//*undefined:
console.log(undefined > 0 ); // false (1)
console.log(undefined < 0 ); // false (2)
console.log(undefined == 0 ); // false (3)
//Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons. The equality check (3) returns false because undefined only equals null, undefined, and no other value.




//TODO--------------------------------------------------------------------   

//!Conditional Statements

let hour = new Date().getHours(); // This gets the current hour (0-23)

if (hour < 18) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}


// switch(expression) {
//     case x:
//         // code block
//         break;
//       case y:
//         // code block
//         break;
//       default:
//         // code block
//     } 
