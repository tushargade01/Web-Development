//q1 create a number variable num with some value.now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 248;
if (num % 10 == 0) {
    console.log(`good, the number ${num} is divisible by 10`);
} else {
    console.log('bad');
}

//q2. takethe users name & age as input using prompts.then return back the follwing statement to the user as an alert (by substituting their name & age).
        //name is age years old.

let firstName = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
let msg = firstName + " is " + age + " years old."
alert(msg);



//write a switch statement to print the months in quarter.
//Months in quarter 1 : January, February, March
//Months in quarter 2 : April, May, June
//Months in quarter 3 : July, August, September
//Months in quarter 4 : October, November, Decemebr

let num = 30;

switch (num) {
    case 1: console.log('January, February, March');
        break;
    case 2: console.log('April, May, June');
        break;
    case 3: console.log('July, August, September');
        break;
    case 4: console.log('October, November, Decemebr');
        break;
    default: console.log("wrong choose!");
}


// A string a golden string if it starts with the character A or a and has a total length greater than 5
//for a given string print if it is golden or not.

let str = 'atus'

if ((str[0] == 'a' || str[0] == 'A') && str.length > 5) {
    console.log('golden');
} else {
    console.log('not golden');
}

//write a program to find the largest of 3 numbers.

let val1 = 3;
let val2 = 13;
let val3 = 6;
let largest = val1;
if (val2 > largest) {
    largest = val2;
}
if (val3 > largest) {
    largest = val3
}
console.log(largest)


//write a program to check if 2 numbers have the same last digit.

let num1 = 234;
let num2 = 654;

let str1 = String(num1);

if ((String(num1).length - 1) && (String(num2).length - 1)) {
    console.log(`${num1} and ${num2} have the same last digit i.e. ${str1[str1.length - 1]}`);
} else {
    console.log('not same');
}
