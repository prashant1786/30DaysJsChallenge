// ------------------------------------------------------------------------Activity-1------------------------------------------------------------------------

//task-1
let num = 15;

if(num>0){
    console.log("Positive");
}
else if(num<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}


//task-2
let age = 15;

if(age>=18){
    console.log("Eligible");
}
else{
    console.log("Non-Eligible");
}

// ------------------------------------------------------------------------Activity-2------------------------------------------------------------------------

//task-3
let num_1=15;
let num_2=15;
let num_3=15;
if(num_1==num_2 && num_1==num_3){
    console.log("all numbers are equal : "+num_1);
}
else{if(num_1>num_2){
    if (num_1>num_3){
        console.log(`${num_1} is largest`);
    } else {
        console.log(`${num_3} is largest`);        
    }
}
else if(num_2>num_3){
    console.log(`${num_2} is largest`);
}
else{
    console.log(`${num_3} is largest`);
}}

// ------------------------------------------------------------------------Activity-3------------------------------------------------------------------------

//task-4
let day=5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid entery");
        break;
}

//task-5
let score = 85; // assign a score
let grade; // declare a variable to store the grade

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("Your grade is " + grade); // display the grade

// ------------------------------------------------------------------------Activity-4------------------------------------------------------------------------

//task-6
let no=5;
let ans=(no%2==0)?"even":"odd"; 
console.log(`${no} is ${ans} number.`);

// ------------------------------------------------------------------------Activity-5------------------------------------------------------------------------

//task-7
let year = 2000;
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(`${year} is a leap year`);    
} else {
    console.log(`${year} is not a leap year`);    
}
