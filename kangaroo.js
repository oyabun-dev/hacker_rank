const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;

function isInRange(n, min, max) {
    return (n >= min && n <= max);
}

function kangaroo(x1, v1, x2, v2) {

    if (isInRange(v1, 1, 10000) && isInRange(v2, 1, 10000) && isInRange(x1, 0, 10000) && isInRange(x2, 0, 10000) && x1 < x2) {
        if (v1 == v2) {
            return x1 == x2 ? "YES" : "NO";
        } else {
            return (x1 - x2) % (v2 - v1) == 0 && (x1 - x2) / (v2 - v1) >= 0 ? "YES" : "NO";
        }
    }

}
