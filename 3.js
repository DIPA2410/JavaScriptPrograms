function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4)); // Output: "Robi"
