// ------------------------------------------------------------------------Activity-1------------------------------------------------------------------------

// task-1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}console.log()

// task-2
for(let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i * 5}`);
}console.log()

// ------------------------------------------------------------------------Activity-2------------------------------------------------------------------------

// task-3
let number = 0;
let totalSum = 0;
while(number < 11) {
    totalSum += number;
    number++;
}
console.log(totalSum);console.log()

// task-4
let countdown = 10;
while(countdown > 0) {
    console.log(countdown);
    countdown--;
}console.log()

// ------------------------------------------------------------------------Activity-3------------------------------------------------------------------------

// task-5
let currentNumber = 1;
do {
    console.log(currentNumber);
    currentNumber++;
} while(currentNumber <= 5)console.log()

// task-6
const targetFactorial = 5333333;
let increment = 1;
let factorial = 1;
do {
    factorial *= increment;
    increment++;
} while(increment <= targetFactorial)
console.log(factorial);console.log()

// ------------------------------------------------------------------------Activity-4------------------------------------------------------------------------

// task-7
for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
    let row = '';
    for (let star = 1; star <= rowNumber; star++) {
        row += '*';
    }
    console.log(row);
}console.log()

// ------------------------------------------------------------------------Activity-5------------------------------------------------------------------------

// task-8
for(let i = 1; i <= 10; i++) {
    if(i === 5) continue;
    console.log(i);
}console.log()

// task-9
for(let i = 1; i <= 10; i++) {
    if(i === 7) break;
    console.log(i);
}console.log()
