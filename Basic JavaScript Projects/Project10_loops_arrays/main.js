// -------------------------------
// WHILE LOOP FUNCTION
// -------------------------------
function while_loop() {
    let text = "";      // start with an empty string
    let i = 1;          // counter begins at 1

    // Loop runs while i is less than or equal to 5
    while (i <= 5) {
        text += "Number " + i + "<br>";
        i++; // increase counter
    }

    document.getElementById("While_Loop").innerHTML = text;
}


// -------------------------------
// FOR LOOP FUNCTION
// -------------------------------
function for_loop() {
    let fruits = ["Apple", "Banana", "Mango", "Orange"]; // array to loop through
    let result = "";

    // Loop through the entire array
    for (let i = 0; i < fruits.length; i++) {
        result += fruits[i] + "<br>";
    }

    document.getElementById("For_Loop").innerHTML = result;
}


// -------------------------------
// ARRAY FUNCTION
// -------------------------------
function array_function() {
    let colors = ["Red", "Green", "Blue", "Yellow"]; // array with 4 values

    // Display the 3rd element in the array
    document.getElementById("Array_Output").innerHTML =
        "My favorite color is: " + colors[2];  // "Blue"
}


// -------------------------------
// OBJECT USING let KEYWORD
// -------------------------------
function object_function() {
    // Create an object using let
    let phone = {
        brand: "Samsung",
        model: "S24",
        year: 2024
    };

    // Display some properties of the object
    document.getElementById("Object_Output").innerHTML =
        "Phone: " + phone.year + " " + phone.brand + " " + phone.model;
}
