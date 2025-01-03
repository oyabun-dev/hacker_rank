function isInRange(n) {
    return (n >= 1 && n <= 100);
}
function compareTriplets(a, b) {
    let aScore = 0, bScore = 0;
    if (a.length === 3 && b.length === 3) {
        for (let i = 0; i < a.length; i++) {
            const aElement = a[i];
            const bElement = b[i];
            if (isInRange(aElement) && isInRange(bElement)) {
                aScore += aElement > bElement ? 1 : 0;
                bScore += bElement > aElement ? 1 : 0;
            }
        }
    }
    return [aScore, bScore];
}

let a = [5, 6, 7];
let b = [3, 6, 10];

console.log(compareTriplets(a, b));