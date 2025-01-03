function isInRange(n) {
    return (n > 0 && n <= 1000);
}
function simpleArraySum(ar) {
    let result = 0;
    if (isInRange(ar.length)) {
        for (let i = 0; i <= ar.length; i++) {
            if (isInRange(ar[i])) {
                result += ar[i];
            }
        }
    }
    return result;
}

let ar = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(ar));