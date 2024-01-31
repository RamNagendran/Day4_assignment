

const printOddNumbers = (arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5]);
// output 
// 1
// 3
// 5

// ------------------------------------------------------------------------------------------------
const convertToTitleCaps = (arr) => {
    return arr.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCaps(["hello", "world"]));
// output
// [ 'Hello', 'World' ]

// ------------------------------------------------------------------------------------------------

const sumOfNumbers = (arr) => {
    return arr.reduce((acc, num) => {
        return acc + num;
    }, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
// output - 15

// ------------------------------------------------------------------------------------------------

const getPrimeNumbers = (arr) => {
    return arr.filter((num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6]));
// output - [2, 3, 5]

// ------------------------------------------------------------------------------------------------

const getPalindromes = (arr) => {
    return arr.filter((str) => {
        const reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    });
};

console.log(getPalindromes(["level", "hello", "madam"]));
// output - [ 'level', 'madam' ]