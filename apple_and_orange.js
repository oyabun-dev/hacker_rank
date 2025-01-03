const s = 7;
const t = 10;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];
const a = 4;
const b = 12;
const isPositionsCorrect = (a, s, t, b) => (a < s && s < t && t < b);

countApplesAndOranges(s, t, a, b, apples, oranges);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    if (!isInRangeLarge([s, t, a, apples.length, oranges.length], 1, Math.pow(10, 5)) && !isInRangeLarge([...apples, ...oranges], Math.pow(-10, 5), Math.pow(10, 5)) && !isPositionsCorrect(a, s, t, b)) {
        return 0;
    }
    const appleInHouseCount = countFruitsInHouse(isFruitInHouse(getFruitsPositionArray(apples, a), s, t));
    const orangeInHouseCount = countFruitsInHouse(isFruitInHouse(getFruitsPositionArray(oranges, b), s, t));
    console.log(appleInHouseCount, orangeInHouseCount);
}

function isInRangeLarge(n, inf, sup) {
    n.forEach(number => {
        number >= inf && number <= sup;
    })
}

function countFruitsInHouse(isFruitsInHouseArray) {
    let count = 0;
    isFruitsInHouseArray.forEach(isFruitInHouse => {
        count = isFruitInHouse ? count + 1 : count;
    });
    return count;
}

function isFruitInHouse(fruitsPositionArray, houseStartingPosition, houseEndingPosition) {
    const isFruitInHouseArray = [];
    fruitsPositionArray.forEach(fruitPosition => {
        isFruitInHouseArray.push(fruitPosition >= houseStartingPosition && fruitPosition <= houseEndingPosition)
    });
    return isFruitInHouseArray;
}

function getFruitsPositionArray(fruitDistanceFromTreeArray, fruitTreePosition) {
    const fruitsPositionArray = []
    fruitDistanceFromTreeArray.forEach(fruitDistanceFromTree => {
        fruitsPositionArray.push(fruitLandingPosition(fruitTreePosition, fruitDistanceFromTree))
    });
    return fruitsPositionArray;
}

function fruitLandingPosition(treePosition, fruitDistanceFromTree) {
    return treePosition + fruitDistanceFromTree;
}


// const applesPositions = getFruitsPositionArray(apples, a);
// const orangesPositions = getFruitsPositionArray(oranges, b);
// const isAppleInHouse = isFruitInHouse(applesPositions, s, t);
// const isOrangeInHouse = isFruitInHouse(orangesPositions, s, t);
// const appleInHouseCount = countFruitsInHouse(isAppleInHouse);
// const orangeInHouseCount = countFruitsInHouse(isOrangeInHouse);