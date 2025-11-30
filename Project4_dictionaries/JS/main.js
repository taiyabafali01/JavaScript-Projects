// A JavaScript dictionary (object) with key-value pairs
var Person = {
    name: "Taylor",
    age: 29,
    job: "Developer",
    country: "Canada"
};

// Function using the delete operator
function showDictionary() {

    // Delete the 'age' key-value pair from the dictionary
    delete Person.age;

    // Try to display the deleted value (this will show 'undefined')
    document.getElementById("Dictionary").innerHTML = 
        "Age after delete: " + Person.age;
}
