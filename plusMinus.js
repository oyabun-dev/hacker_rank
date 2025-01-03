const isInRangeLarge = (n, inf, sup) => (n >= inf && n <= sup);
const isInRangeStrict = (n, inf, sup) => (n > inf && n <= sup);
const calcRatio = (n, arrLength) => parseFloat((n / arrLength)).toFixed(6);


function plusMinus(arr, n) {
    let positive = 0, negative = 0, zero = 0, positiveRatio, negativeRatio, zeroRatio;
    const arrLength = n;
    if (isInRangeStrict(arrLength, 0, 100)) {
        for (let i = 0; i < arrLength; i++) {
            console.log(arrLength);
            const arrElement = parseInt(arr[i]);
            if (!isInRangeLarge(arrElement, -100, 100)) {
                return 'Array element out of range';
            }
            positive += arrElement > 0 ? 1 : 0;
            negative += arrElement < 0 ? 1 : 0;
            zero += arrElement === 0 ? 1 : 0;
        }
        positiveRatio = calcRatio(positive, arrLength);
        negativeRatio = calcRatio(negative, arrLength);
        zeroRatio = calcRatio(zero, arrLength);

        console.log(positiveRatio + '\n' + negativeRatio + '\n' + zeroRatio);
    } else {
        return 'Array length out of range';
    }
}


const n = 6;
const arr = [1, 1, 0, -1, -1];

plusMinus(arr, n);