const readline = require('readline-sync');
console.log('Welcome to the calculator!');

console.log('\nEnter your first number:');
const N1 = readline.prompt();

console.log('\nEnter your second number:');
const N2 = readline.prompt();

const answer = N1 * N2;
console.log('\nThe answer is ' + answer);
