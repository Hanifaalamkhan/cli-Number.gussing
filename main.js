#! /usr/bin/env node
import inquirer from 'inquirer';
// 1) computer will generate a random number. done
// 2) user input guessing number.
// 3)compare user input with computer generate number and sho result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number 1-6:",
    },
]);
if (answer.userGuessedNumber === 'randomNumber') {
    console.log('congratulations! you guessed a right number.');
}
else {
    console.log('you guessed a wrong number. ');
}
;
