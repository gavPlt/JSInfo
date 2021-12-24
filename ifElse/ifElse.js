const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question(`Please enter a number: `, number => {
    let convertedVal = parseInt(number);
    if (number > 0) {
        console.log("1");
        readline.close();
    } else if (number === 0) {
        console.log("0");
        readline.close();
    } else if (number < 0) {
        console.log("-1");
        readline.close();
    }

    let result;
let a = 3; 
let b = 4;

result = (a + b < 4) ? 'Below' : 'Over';
console.log(result); 

let message;
let login = 'Emplo';
let comparisonResult = login == 'Employee' ? 'Hello' :
login == 'Director' ? 'Greetings' :
login == '' ? 'No login' : ''; 

console.log(comparisonResult);
})

