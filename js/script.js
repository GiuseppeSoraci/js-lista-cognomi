// Prompt
var surnameUser = prompt("What's your surname?").toLowerCase().trim();

// Array
var list = [
    "bianchi", 
    "neri", 
    "rossi", 
    "verdi", 
    "gialli"
];

list.push(surnameUser);
list.sort();

// User position
var position = (list.indexOf(surnameUser) + 1);

// Loop
var surnames = " ";
for (var i = 0; i < list.length; i++) {
    surnames += "<li>" + list[i] + "</li>";
}

// Output 
document.getElementById("list").innerHTML = surnames;
document.getElementById("position").innerHTML = "Your position is: " + position;