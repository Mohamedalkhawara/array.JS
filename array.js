// 1-Write a function to find the largest element in an array.

let array = [17, 42, 8, 99, 23];
let largestElement = FLE(array);
function FLE(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


console.log("The largest element in the array is:", largestElement);


// 2-Write a function to find the smallest element in an array.


let array1 = [17, 42, 8, 99, 23];
let smallestElement = FSE(array1);
function FSE(arry) {
    let smallest = arry[0];

    for (let i = 1; i < arry.length; i++) {
        if (arry[i] < smallest) {
            smallest = arry[i];
        }
    }

    return smallest;
}


console.log("The smallest element in the array is:", smallestElement);



// 3-Write a function to find the sum of all elements in an array.

let array2 = [17, 42, 8, 99, 23];
let arraySum = findSum(array2);
function findSum(arry) {
    let sum = 0;

    for (let i = 0; i < arry.length; i++) {
        sum += arry[i];
    }

    return sum;
}


console.log("The sum of all elements in the array is:", arraySum);


// 4-Write a function to find the average of all elements in an array.

let array3 = [17, 42, 8, 99, 23];
let arrayAverage = findAverage(array3);
function findAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;

    return average;
}


console.log("The average of all elements in the array is:", arrayAverage);


// 5-Write a function to find the median of all elements in an array.

const array4 = [17, 42, 8, 99, 23];
const arrayMedian = findMedian(array4);
function findMedian(arr) {
    arr.sort((a, b) => a - b);

    const length = arr.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 1) {
        return arr[middle];
    } else {
        return (arr[middle - 1] + arr[middle]) / 2;
    }
}


console.log("The median of all elements in the array is:", arrayMedian);


// 6-Write a function to remove all duplicates from an array.

let aarray = [17, 42, 8, 17, 23, 42, 8];

function removeDuplicates(arr) {
    const cleanArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < cleanArray.length; j++) {
            if (arr[i] === cleanArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            cleanArray.push(arr[i]);
        }
    }

    return cleanArray;
}

let newArray = removeDuplicates(aarray);

console.log("Array after removing duplicates:", newArray);


// 7-Write a function to sort an array in ascending order.
function sortAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const myArray = [17, 42, 8, 99, 23];
const sortedArray = sortAscending(myArray);
console.log("Array after sorting in ascending order:", sortedArray);


// 8-Write a function to sort an array in descending order.

function sortDescending(arr) {
    var length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let SyArray = [17, 42, 8, 99, 23];
let SortedArray = sortDescending(myArray);
console.log("Array after sorting in descending order:", sortedArray);


// 9-Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
    const length = arr.length;
    for (let i = length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

let thisArray = [17, 42, 8, 99, 23];
let shuffledArray = shuffleArray(myArray);
console.log("Array after shuffling:", shuffledArray);
