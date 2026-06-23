function searchGoogle() {

    let query = document.getElementById("carSearch").value;

    if(query.trim() === ""){
        alert("Please enter a car name.");
        return;
    }

    window.open(
        "https://www.google.com/search?q=" +
        encodeURIComponent(query + " car rental"),
        "_blank"
    );
}

function findRentalCars() {

    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;

    if(pickup.trim() === ""){
        alert("Please enter Pickup Address");
        return;
    }

    let searchQuery = "car rental in " + pickup;

    if(drop.trim() !== ""){
        searchQuery += " near " + drop;
    }

    window.open(
        "https://www.google.com/search?q=" +
        encodeURIComponent(searchQuery),
        "_blank"
    );
}

function openModal(){
    document.getElementById("bookingModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("bookingModal").style.display = "none";
}

function submitBooking(){
    alert("Booking Submitted Successfully!");
    closeModal();
}

window.onclick = function(event){

    let modal = document.getElementById("bookingModal");

    if(event.target == modal){
        modal.style.display = "none";
    }
}