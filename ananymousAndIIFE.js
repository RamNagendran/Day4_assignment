// 1. Print odd numbers in an array

// Anonymous function
const printOddNumbers = function (arr) {
    arr.filter(function (num) {
        if (num % 2 !== 0) {
            console.log(num)
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function (arr) {
    arr.forEach(function (num) {
        if (num % 2 !== 0) {
            console.log(num);
        }

    });
})([1, 2, 3, 4, 5]);

// output 
// 1
// 3
// 5

// --------------------------------------------------------------------------------------------------------------------------------


// 2. Convert all the strings to title caps in a string array

// Anonymous function
const convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCaps(["hello", "world"]));

// IIFE
console.log((function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world"]));


// output
// [ 'Hello', 'World' ]


// --------------------------------------------------------------------------------------------------------------------------------

// 3. Sum of all numbers in an array

// Anonymous function
const sumOfNumbers = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// IIFE
console.log((function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})([1, 2, 3, 4, 5]));


// output - 15

// --------------------------------------------------------------------------------------------------------------------------------

// 4. Return all the prime numbers in an array


// Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6]));

// IIFE
console.log((function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})([1, 2, 3, 4, 5, 6]));


// output - [2, 3, 5]

// --------------------------------------------------------------------------------------------------------------------------------

// 5. Return all the palindromes in an array
const getPalindromes = function(arr) {
    return arr.filter(function(str) {
        const reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    });
};

// Anonymous function
console.log(getPalindromes(["level", "hello", "madam"]));

// IIFE
console.log((function(arr) {
    return arr.filter(function(str) {
        const reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    });
})(["level", "hello", "madam"]));

// output - [ 'level', 'madam' ]
// --------------------------------------------------------------------------------------------------------------------------------

// 6. Return median of two sorted arrays of the same size.
const getMedian = function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArr.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArr[middle - 1] + mergedArr[middle]) / 2;
    } else {
        return mergedArr[middle];
    }
};

// Anonymous function
console.log(getMedian([1, 3, 5], [2, 4, 6]));

// IIFE
console.log((function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArr.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArr[middle - 1] + mergedArr[middle]) / 2;
    } else {
        return mergedArr[middle];
    }
})([1, 3, 5], [2, 4, 6]));

// output - 3.5
// --------------------------------------------------------------------------------------------------------------------------------

// 7. Remove duplicates from an array
const removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

// Anonymous function
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
console.log((function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 2, 3, 4, 4, 5]));

// output - [ 1, 2, 3, 4, 5 ]

// --------------------------------------------------------------------------------------------------------------------------------
// 8. Rotate an array by k times
const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

// Anonymous function
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
console.log((function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})([1, 2, 3, 4, 5], 2));

// output - [ 4, 5, 1, 2, 3 ]