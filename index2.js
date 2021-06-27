const readline = require('readline-sync');
console.log('Welcome to the calculator!');

console.log('\nEnter your operation:');
const Op = readline.prompt();

console.log('\nEnter your first number:');
const N1 = readline.prompt();

console.log('\nEnter your second number:');
const N2 = readline.prompt();

if (Op == '+') {
const answer = parseInt(N1) + parseInt(N2);
console.log('\nThe answer is ' + answer);
} else if (Op == '*') {
    const answer = parseInt(N1) * parseInt(N2);
    console.log('\nThe answer is ' + answer);}
    else if (Op == '-') {
        const answer = parseInt(N1) - parseInt(N2);
        console.log('\nThe answer is ' + answer);}
        else if (Op == '/') {
            const answer = parseInt(N1) / parseInt(N2);
            console.log('\nThe answer is ' + answer);}
            else {console.log('\nYou did not enter a valid operation');}
