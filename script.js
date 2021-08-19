const seats = document.getElementsByClassName("seat");
const seatNumber = document.getElementById("namber-of-seats");
const ticketCost = document.getElementById("ticket-cost");

document.addEventListener("click", (e) => {
  if (e.target.classList == "seat") {
    console.log("seat");
  }
});
