// Chapter 35 Functions
// CHapter 36 Functions: Passing them data
// CHapter 37 Functions:Passing data back from them
// CHapter 38 Functions: Functions:Passing data back from them



function print(fname , lname){
    let name = fname + " " + lname;
    return name;
}

let fname = "Rabia";
let lname = "Yousuf";
print(fname , lname);
console.log(print(fname,lname));