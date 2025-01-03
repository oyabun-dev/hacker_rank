const arr = [3, 1, 2, 10, 1];

const outputArray = new Array();
outputArray.push(arr[0]);


for (let i = 1; i < arr.length; i++) {
    let sum = 0;
    const currentElement = outputArray[i - 1], nextElement = arr[i];
    sum += currentElement + nextElement;
    outputArray.push(sum);
}

console.log(outputArray);