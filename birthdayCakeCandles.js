/**
 * A function that checks if a number is within a specified range.
 * @param {number} n - The number to check.
 * @param {number} inf - The lower bound of the range.
 * @param {number} sup - The upper bound of the range.
 * @returns {boolean} - `true` if the number is within the range, `false` otherwise.
 */
const isInRangeLarge = (n, inf, sup) => (n >= inf && n <= sup);

/**
 * A function that returns the number of candles that are tallest.
 * @param {Array} candles - An array of integers representing the height of each candle.
 * @returns {number} - The count of the tallest candles.
 */
function birthdayCakeCandles(candles) {
    // Define the highest candle and its count
    let highestCandle = 0, highestCandleCount = 0;
    // Define the maximum array length and the maximum candle height
    const MAX_ARRAY_LENGTH = Math.pow(10, 5);
    const MAX_CANDLE_HEIGHT = Math.pow(10, 7);
    // Check if the candles are out of range
    const candlesArray = candles.map(candle => {
        if (!isInRangeLarge(candle, 1, MAX_CANDLE_HEIGHT)) { throw new Error('Array element out of range'); }
        return parseInt(candle);
    });
    // Check if the array length is out of range
    const candlesLength = candlesArray.length;
    if (!isInRangeLarge(candlesLength, 1, MAX_ARRAY_LENGTH)) { throw new Error('Array length out of range'); }
    // Sort the candles array in descending order
    candlesArray.sort((a, b) => b - a);
    highestCandle = candlesArray[0];
    // Filter the highest candle count
    highestCandleCount = candlesArray.filter(candle => candle === highestCandle).length

    return highestCandleCount;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));