// ---------------------------------------------
// concat() Method Assignment
// This combines multiple strings into one sentence
// ---------------------------------------------
function fullSentence() {
    var part1 = "JavaScript ";
    var part2 = "string methods ";
    var part3 = "are very useful!";
    var wholeSentence = part1.concat(part2, part3);

    // Display the combined sentence
    document.getElementById("Concatenate").innerHTML = wholeSentence;
}

fullSentence();  // Call function when page loads



// ---------------------------------------------
// slice() Method Assignment
// This extracts a portion of a string
// ---------------------------------------------
function sliceMethod() {
    var sentence = "JavaScript slice method extracts text.";
    
    // Extract characters from index 10 to 15
    var section = sentence.slice(10, 15);

    // Display the sliced text
    document.getElementById("Slice").innerHTML = section;
}

sliceMethod();  // Call function when page loads



// ---------------------------------------------
// toString() Method Assignment
// Converts a number into a string
// ---------------------------------------------
function numberToString() {
    var number = 150;
    var stringNumber = number.toString();  // Converts number -> string

    document.getElementById("Numbers_to_string").innerHTML =
        "Number converted to string: " + stringNumber;
}

numberToString();  // Call function when page loads



// ---------------------------------------------
// toPrecision() Method Assignment
// Formats a number to a specified total length
// ---------------------------------------------
function precisionMethod() {
    var number = 123.456789;
    var preciseNumber = number.toPrecision(4);  // keeps 4 total digits

    document.getElementById("Precision").innerHTML =
        "Number formatted with toPrecision(4): " + preciseNumber;
}

precisionMethod();  // Call function when page loads
