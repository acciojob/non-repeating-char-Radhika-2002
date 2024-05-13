function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If all characters are repeated, return null
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
