function capitalizeWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

console.log(capitalizeWords('js string exercises')); // Output: "Js String Exercises"