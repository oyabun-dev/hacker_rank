const isInRangeLarge = (n, inf, sup) => (n >= inf && n <= sup);

function miniMaxSum(array) {
    const arrLength = array.length;
    let minSum = 0, maxSum = 0;
    if (arrLength !== 5) {
        console.log('Array length out of range');
        return;
    }
    for (let i = 0; i < arrLength; i++) {
        const arrayElement = parseInt(array[i]);
        if (!isInRangeLarge(arrayElement, 1, Math.pow(10, 9))) {
            console.log('Array element out of range');
            return;
        }
    }
    const ascendingSortedArray = array.sort((a, b) => a - b);
    const minArray = ascendingSortedArray.slice(0, arrLength - 1);

    const descendingSortedArray = array.sort((a, b) => b - a);
    const maxArray = descendingSortedArray.slice(0, arrLength - 1);

    minSum = minArray.reduce((a, c) => a + c);
    maxSum = maxArray.reduce((a, c) => a + c);

    return minSum + ' ' + maxSum;
}

const arr = [1, 2, 3, 4, 5];

console.log(miniMaxSum(arr));