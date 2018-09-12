// PART ONE

// 1. Concatenation allows you to add datatypes known as "strings" (text-based) together. 
// console.log('just ' + 'like ' + 'so!')
// Interpolation is similar, but allows you to use variables in place of individual strings, which can substitute in a variety of values. 
// var word = 'like';
//
// console.log('just ' + word ' so!') // You do have to space them a little differently, in this case.

// 2. DRY stands for DON'T REPEAT YOURSELF. 
// Sage wisdom in a handy acronym: basically, 
// don't write a whole bunch of expressions when you can just write one, i.e. a loop.

// 3. Declaring a variable is using the var keyword to announce an element as a variable. Defining a variable is giving it value.
// i.e. var bike = blue
//      ^declaration  ^definition

// 4. Const variables can have their attributes changed, but they CAN'T be redefined. 
// They should be your default variable type, as their stability is generally useful. 
// Let variables CAN be redefined. They're helpful when declaring a variable you might like to change like, say, one inside of a loop.  

// 5. A parent directory is a directory that contains a another directory, which is in turn is known as its child.

// 6. using the command 'man'.

// 7. Tab completion fills in suggested files/folders based on the first letter/number you put in. 
// It's awesome because it saves you the time of having to type out the whole name. 

//  PART TWO
//  const a = 4;
//  const b = 53;
//  const c = 57;
//  const d = 16;
//  const e = 'Kevin';

// 1. a < b
// 2. c > d
// 3. ===
// 4. a < b < c
// 5. a === a < d
// 6. e === 'Kevin'
// 7. 48 == '48' 

//PART THREE

// 1. Infinite?
// 2. Not infinite. 'Do not run this loop'
// 3. 

let letters = "A";
let i = 0;

while (i < 20) { //as long as i is less than 20 
	letters += "A"; //it will add the letter A to the string letters
	i++;
}

console.log(letters); //expected output: a 20-A long string, like "AAAAAAA", etc.

//Worked just like I thought it would :) 

//PART FOUR

// 1. While loops continue looping until a certain condition is met-say, until variable being fed through the loop is transformed to a certain value.
// For loops, on the other hand, run through each value in an array and work a repeating process on each one.
// They both involve a repeating process, and can be used to solve some of the same problems.

// 2.
for (let i = 0; i <= 999; i ++) {
	console.log(i);
}
// 3. The first part of the control statement is: let i = 0; it specifies that the code should be executed if it is true. 
// The second part of the control statement is: i < 100; it defines the parameters for which the code should be executed/at which point it will no longer apply. 
// The third part of the control statement is: i ++; this is the code that will add 1 to i repeatedly, in a loop, until the condition set in part 2 is met. 
// 4. 
for (let i = 999; i >= 0; i --) {
	console.log(i - 1);
}
// 5.
for (let i = 1; i <= 10; i ++) {
	console.log("The value of i is: " + i + " of 10")
}