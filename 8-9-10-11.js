function findIndex(arr, elem) {
    return arr.findIndex(item => item === elem);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // Output: 2

console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // Output: 1

console.log(findIndex(["a", "g", "y", "d"], "d")); // Output: 3

console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // Output: 0
