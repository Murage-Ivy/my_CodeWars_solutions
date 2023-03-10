// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

// The function should be able to take up to 4 arguments:

// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th arguments are integers, 3 and 5 by default.
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

// [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
// When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

// ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
// ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]

var fizzBuzzCustom = function (stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
    const values = Array.from({
        length: 100
    }, (v, k) => k + 1)
    const result = values.map(value => {
        if (value % numOne === 0 && value % numTwo === 0) {
            return stringOne + stringTwo
        } else if (value % numTwo === 0) {
            return stringTwo
        } else if (value % numOne === 0) {
            return stringOne
        } else {
            return value
        }
    })
    return result

};

console.log(fizzBuzzCustom())