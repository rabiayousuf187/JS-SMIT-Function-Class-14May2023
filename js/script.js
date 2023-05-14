// Chapter 35 Functions
// CHapter 36 Functions: Passing them data
// CHapter 37 Functions:Passing data back from them
// CHapter 38 Functions: Functions:Passing data back from them

function print(fname, lname) {
  let name = fname + " " + lname;
  return name;
}

let fname = "Rabia";
let lname = "Yousuf";
print(fname, lname);
console.log(print(fname, lname));

// Switch Case
// CHapter 39 and 40 Switch statements:How to start them

// A.  Switch as **********   Boolean Evaluation
let x = +prompt("Enter an Integer \n To Check Positive Negative or Zero:");
console.log("You Enter", x);
console.log("Swich as Boolean Evaluation");

// if compare expression with switch case used switch(true)
// otherwise it's default syntax it switch(x pr var to chech)
// In my case we use Switch with compare statement
// so we used switch as boolean evalution of expression
switch (true) {
  case x < 0:
    console.log("Negative Integer");
    break;
  case x == 0:
    console.log("Integer is Zero");
    break;
  case x > 0:
    console.log("Positive Integer");
    break;
  default:
    console.log("Invalid Integer");
    break;
}

// B. Swich as variable value match
let num = +prompt(
  "Enter an Integer\nI will tell you which number you Press from 1 t0 5:"
);
console.log("Swich as Value Match");
// if compare expression with switch case used switch(true)
// otherwise it's default syntax it switch(x pr var to chech)
// In my case we use Switch with compare statement
// so we used switch as boolean evalution of expression
switch (num) {
  case 1:
    console.log("Case 1 Match");
    console.log("You Enter ", num);
    break;
  case 2:
    console.log("Case 2 Match");
    console.log("You Enter ", num);
    break;
  case 3:
    console.log("Case 3 Match");
    console.log("You Enter ", num);
    break;
  case 4:
    console.log("Case 4 Match");
    console.log("You Enter ", num);
    break;
  case 5:
    console.log("Case 5 Match");
    console.log("You Enter ", num);
    break;
  default:
    console.log("Default Match");
    console.log("Invalid Integer");
    break;
}

// ********Chapter 41 While Loop
// Used where unknown times loop run
let num1 = 0;
let table = 2;
console.log("Print Table of "+ table +" Using While loop:");
while (num1 <= 10) {
  console.log(`${table} * ${num1} = ${table} * ${num1}`);
  num1++;
}
console.log("While loop Completed");
