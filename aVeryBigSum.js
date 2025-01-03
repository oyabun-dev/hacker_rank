const isInRange = (n, inf, sup) => (n >= inf && n <= sup);
function aVeryBigSum(ar) {
    let result = 0n;
    console.log(typeof result);
    const arLength = ar.length;
    if (isInRange(arLength, 1, 10)) {
        for (let i = 0; i < arLength; i++) {
            const arElement = ar[i];
            result += isInRange(arElement, 0, 10 ** 10) ? BigInt(arElement) : 0n;
        }
    }

    return result;

}

let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(ar));