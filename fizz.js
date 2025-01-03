'use strict'

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    const number = parseInt(n);
    const isInRange = number > 0 && number < Math.pow(2, 5);

    if (isInRange) {
        let numArray = new Array();
        for (let i = 1; i <= number; i++) {
            numArray.push(i);
        }
        for (const numToCheck of numArray) {
            checkResult(numToCheck)
        }

        console.log(numArray);
    } else {
        console.log('Sorry! Your number is not in range (0 < n < 2**5) \n');
    }

    console.log(isMultiple(15, 3));
    console.log(isMultiple(11, 5));


    function checkResult(num) {
        if (isMultiple(num, 3) && isMultiple(num, 5)) {
            console.log('FizzBuzz');
        } else if (isMultiple(num, 3) && !isMultiple(num, 5)) {
            console.log('Fizz');
        } else if (!isMultiple(num, 3) && isMultiple(num, 5)) {
            console.log('Buzz');
        } else {
            console.log(`${num}`);
        }
    }

    function isMultiple(dividend, div) {
        const rest = dividend % div;
        const isNumMultiple = rest == 0 ? true : false;
        return isNumMultiple;
    }

}

fizzBuzz(15)

// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     fizzBuzz(n);
// }
