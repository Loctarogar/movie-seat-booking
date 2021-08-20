const seats = document.getElementsByClassName("seat");
const ticketsCost = document.getElementById("ticket-cost");
const numberOfSeats = document.getElementById("number-of-seats");
const chosenMovie = document.getElementById("movies");
let selectedSeats = document.querySelectorAll(".selected");

// Eventlisteners
// Eventlistener on movie change
chosenMovie.addEventListener("change", (e) => {
  populateInformation();
});

// Eventlistener on click
document.addEventListener("click", (e) => {
  seatsHandler(e);
});

// Functions
// Main seat handler function
function seatsHandler(e) {
  if (
    !e.target.classList.contains("occupied") &&
    e.target.classList.contains("seat")
  ) {
    e.target.classList.toggle("selected");
    selectedSeats = document.querySelectorAll(".selected");
  }

  populateInformation();
}

// Populate total cost and number of seats
function populateInformation() {
  let totalSeatsNumber = selectedSeats.length;
  let totalCost = selectedSeats.length * chosenMovie.value;
  numberOfSeats.innerText = totalSeatsNumber;
  ticketsCost.innerText = totalCost;
}

populateInformation();
