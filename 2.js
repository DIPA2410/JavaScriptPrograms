var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentElement(arr) {
    var frequency = {};
    var maxCount = 0;
    var mostFrequent;

    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (frequency[elem] == null) {
            frequency[elem] = 1;
        } else {
            frequency[elem]++;
        }

        if (frequency[elem] > maxCount) {
            maxCount = frequency[elem];
            mostFrequent = elem;
        }
    }

    return { element: mostFrequent, count: maxCount };
}

var result2 = mostFrequentElement(arr1);
console.log(result2.element + ' ( ' + result2.count + ' times )');