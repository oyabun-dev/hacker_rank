const housePosition = { start: 7, end: 10 }
const applesDistanceFromTreeArray = [2, 3, -4];
const orangesDistanceFromTreeArray = [3, -2, -4];
const appleTreePosition = 4;
const orangeTreePosition = 12;
const applesPositionArray = [];
const orangesPositionsArray = [];

function countApplesAndOranges(s, t, a, b, apples, oranges) {

}

function countFruitsInHouse(isFruitsInHouseArray) {
    let count = 0;
    isFruitInHouseArray.forEach(isFruitInHouse => {
        count = isFruitInHouse ? count++ : count;
    });
    return count;
}

function isFruitInHouse(fruitsPositionArray, housePosition) {
    const isFruitInHouseArray = [];
    fruitsPositionArray.forEach(fruitPosition => {
        isFruitInHouseArray.push(fruitPosition >= housePosition.start && fruitPosition <= housePosition.end)
    });
    return isFruitInHouseArray;
}

function getFruitsPositionArray(fruitsPositionArray, fruitDistanceFromTreeArray, fruitTreePosition) {
    fruitDistanceFromTreeArray.forEach(fruitDistanceFromTree => {
        fruitsPositionArray.push(fruitLandingPosition(fruitTreePosition, fruitDistanceFromTree))
    });
    return fruitsPositionArray;
}

function fruitLandingPosition(treePosition, fruitDistanceFromTree) {
    return treePosition + fruitDistanceFromTree;
}