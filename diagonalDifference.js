const isInRange = (n, inf, sup) => (n >= inf && n <= sup);

function diagonalDifference(square) {
    const squareSize = square.length;
    let leftDiagonalSum = 0, rightDiagonalSum = 0;
    for (let i = 0, j = squareSize - 1; i < squareSize && j >= 0; i++, j--) {
        for (let k = 0; k < squareSize; k++) {
            if (!isInRange(square[i][k], -100, 100))
                return 'Sorry! Your number is not in range (-100 < n < 100)';
        }

        const topLeftDiagonal = square[i][i], topRightDiagonal = square[i][j];
        leftDiagonalSum += topLeftDiagonal;
        rightDiagonalSum += topRightDiagonal;
    }
    return parseInt(Math.abs(leftDiagonalSum - rightDiagonalSum));
}
const square = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

console.log(diagonalDifference(square)); 