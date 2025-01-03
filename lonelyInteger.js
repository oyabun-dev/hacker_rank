'use strict';

// Given an array of integers, where all elements but one occur twice, find the unique element.

const isIntArray = array => array.every(element => Number.isInteger(element));
const isInRangeStrictLast = (n, inf, sup) => (n >= inf && n < sup);
const isInRangeLarge = (n, inf, sup) => (n >= inf && n <= sup);

function lonelyinteger(array) {
    let lonelyInt = 0;
    if (isIntArray(array) && isInRangeStrictLast(array.length, 1, 100)) {
        for (let index = 0; index < array.length; index++) {
            const element = array.at(index);
            if (!isInRangeLarge(element, 0, 100)) {
                throw new Error('Invalid array format, array contains a too large value');
            }
            if (array.indexOf(element) === array.lastIndexOf(element)) {
                lonelyInt = element;
            } else {
                continue;
            }
        }
    } else {
        throw new Error('Invalid array format');
    }
    return lonelyInt;
}

const array = [1, 2, 3, 4, 100, 2, 1];
console.log(lonelyInteger(array));

// console.log(array.indexOf(4), array.lastIndexOf(4));