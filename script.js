const seats = document.getElementsByClassName("seat");
const seatNumber = document.getElementById("namber-of-seats");
const ticketCost = document.getElementById("ticket-cost");

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    console.log("ff");
  }
});
