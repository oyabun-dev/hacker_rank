const isInRangeStrict = (n, inf, sup) => (n > inf && n <= sup);

function staircase(n) {
    n = parseInt(n);
    if (!isInRangeStrict(n, 0, 100)) {
        console.log('Input out of range');
        return;
    }

    const staircase = [];
    let step, space, floor;
    for (let i = 1; i <= n; i++) {
        step = ['#'.repeat(i)];
        space = [' '.repeat(n - i)];
        floor = [...step, ...space];
        staircase.push(floor);
    }
    for (let i = 0; i < n; i++) {
        console.log(staircase[i][1] + staircase[i][0]);
    }
}

staircase(4);