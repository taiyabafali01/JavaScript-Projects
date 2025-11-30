// -----------------------------
// TERNARY OPERATOR WITH INPUT
// -----------------------------
// This function reads the height from the browser input
// and uses a ternary operator to decide the message.
function Ride_Function() {
    // Get value from the input field
    var Height = document.getElementById("Height").value;

    // Ternary operator: condition ? value_if_true : value_if_false
    var CanRide = (Number(Height) < 52) ? "You are too short" : "You are tall enough";

    // Display the result in the <p> with id="Ride"
    document.getElementById("Ride").innerHTML = CanRide + " to ride.";
}


// -----------------------------
// CONSTRUCTOR FUNCTION EXAMPLE
// -----------------------------
// This constructor will be used with the "new" keyword to create Vehicle objects.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create several Vehicle objects using the "new" keyword.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik  = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This function displays the result of the constructor in an HTML element.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year + ".";
}


// -----------------------------
// NESTED FUNCTION EXAMPLE
// -----------------------------
// This function contains another function inside it.
function Nested_Function() {

    // Call the inner function Count() and display its result
    document.getElementById("Nested").innerHTML = Count();

    // Inner function (nested inside Nested_Function)
    function Count() {
        var Starting_point = 9;  // outer variable

        // Inner function that modifies Starting_point
        function Plus_one() {
            Starting_point++;
        }

        Plus_one();  // call the inner function
        return Starting_point;  // return the new value
    }
}
