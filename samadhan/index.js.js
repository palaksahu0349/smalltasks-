
let marks = [45, 67, 91, 32, 76, 88];

// Function to find highest marks
function findHighest(arr) {
    let highest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    return highest;
}

// Function call
let result = findHighest(marks);
console.log("Highest Marks = " + result);