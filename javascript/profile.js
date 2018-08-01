// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("edit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let genders = document.querySelector("#gender");
let gender = document.querySelector(".gender");
genders.value = gender.innerHTML;

let years = document.querySelector("#year");
let year = document.querySelector(".year");
years.value = year.innerHTML;

let states = document.querySelector("#state");
let state = document.querySelector(".state");
states.value = state.innerHTML;

let smokes = document.querySelector("#smoke");
let smoke = document.querySelector(".smoke");
smokes.value = smoke.innerHTML;

let hobbyes = document.querySelector("#hobbies");
let hobbies = document.querySelector(".hobbies");
hobbyes.value = hobbies.innerHTML;
