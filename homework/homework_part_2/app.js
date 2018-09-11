// PART ONE
// 1. Concatination combines strings (and only strings), whereas interpolation allows the use of placeholder variables that can allow any a range of inputs. 
// 2. DRY stands for "don't repeat yourself", and it's underpinning idea (creating flexible and reusable code, functions, etc.) is best practice for writing most types of code (we've used it for Javascript and CSS).
// 3. Declaring a variable is using the var keyword to announce an element as a variable. Defining a variable is giving it value.
// 4. Redclaring a variable with let allows you to declare that a variable is limited in scope to the block or expression in which it is used. Const variables are a subset of let variables, the values of which cannot be reassigned. Use let for variables that may need to change and const for those that won't?
// 5. A parent directory is a directory that contains a another directory, which is in turn is known as its child.
// 6. using the command 'man'.
// 7. tab completion fills in suggested files/folders based on the first letter/number you put in. It's awesome because it saves you the time of having to type out the whole name. 

// PART TWO
//const a = 4;
//  const b = 53;
//  const c = 57;
//  const d = 16;
//  const e = 'Kevin';

// 1. a < b
// 2. c > d
// 3. ==
// 4. a < b < c
// 5. a == a < d
// 6. e = 'Kevin'
// 7. 48 = '48' 

//PART THREE
// 1. Infinite? I think...
// 2. Not infinite. 'Do not run this loop'
// 3.

let letters = "A";
let i = 0;

while (i < 20) { //as long as the index is less than 20 long
	letters += "A"; //it will add the letter A to the string
	i++;
}

console.log(letters); //expected output: AAAAAAA <- a long string of that

//PART FOUR
// 1. For loops are useful for looping through each item in an array. While loops continue indefinitely until the condition they are set around becomes false. They can go forever uneless given an method to escape. 
// 2.
for (let i = 0; i <= 999; i ++) {
	console.log(i + 1);
}
// 3. The first part of the control statement is: let i = 0; it specifies that the code should be executed if it is true. 
// The second part of the control statement is: i < 100; it defines the parameters for which the code should be executed/at which point it will no longe rapply. 
// The third part of the control statement is: i ++; this is the code that will add 1 to i repeatedly, in a loop, until the condition set in part 2 is met. 
// 4. 
for (let i = 999; i >= 0; i --) {
	console.log(i - 1);
}
// 5.
for (let i = 1; i <= 10; i ++) {
	console.log("The value of i is: " + i + " of 10")
}