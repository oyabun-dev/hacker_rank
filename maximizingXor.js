const isInRage = (n, inf, sup) => (n >= inf && n <= sup);
function maximizingXor(l, r) {
    if (!isInRage(l, 1, r) || !isInRage(r, l, Math.pow(10, 3))) {
        throw new Error('Invalid input');
    }
    if (!Number.isInteger(l) || !Number.isInteger(r)) {
        l = parseInt(l);
        r = parseInt(r);
    }
    let max = 0;
    for (let index = l; index <= r; index++) {
        for (let j = index; j <= r; j++) {
            const currentXor = index ^ j;
            if (currentXor > max) {
                max = currentXor;
            }
        }
    }

    return max;
}