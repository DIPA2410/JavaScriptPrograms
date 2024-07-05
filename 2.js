var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function countOccurrences(arr, elem) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            count++;
        }
    }
    return count;
}

var result2 = countOccurrences(arr1, 'a');
console.log(result2 + ' ( ' + result2 + ' times )'); // Output: a ( 5 times )
