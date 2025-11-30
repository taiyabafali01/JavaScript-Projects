// This function performs addition using the + operator
function addition() {
    var result = 5 + 3;
    document.getElementById("Addition").innerHTML = "Addition result: " + result;
}

// This function performs subtraction using the - operator
function subtraction() {
    var result = 10 - 4;
    document.getElementById("Subtraction").innerHTML = "Subtraction result: " + result;
}

// This function performs multiplication using the * operator
function multiplication() {
    var result = 6 * 7;
    document.getElementById("Multiplication").innerHTML = "Multiplication result: " + result;
}

// This function uses the modulus operator % to get the remainder
function modulus() {
    var result = 25 % 4;
    document.getElementById("Modulus").innerHTML = "Modulus result (remainder): " + result;
}

// This function uses the increment operator ++
function increment() {
    var number = 10;      // Start value
    number++;             // Increment by 1
    document.getElementById("Increment").innerHTML = "Incremented value: " + number;
}

// This function uses the decrement operator --
function decrement() {
    var number = 10;      // Start value
    number--;             // Decrement by 1
    document.getElementById("Decrement").innerHTML = "Decremented value: " + number;
}

// This function uses the Math.random() method from the Math object
function randomNumber() {
    // Math.random() gives a random number between 0 (inclusive) and 1 (exclusive)
    var result = Math.random();
    document.getElementById("Random").innerHTML = "Random number: " + result;
}
