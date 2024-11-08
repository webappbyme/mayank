// script.js

function calculateTripCost() {
    const days = document.getElementById('days').value;
    const persons = document.getElementById('persons').value;
    const destination = document.getElementById('destination').value;

    let costPerPersonPerDay;

    switch (destination) {
        case "Paris":
            costPerPersonPerDay = 150;
            break;
        case "Bali":
            costPerPersonPerDay = 100;
            break;
        case "NYC":
            costPerPersonPerDay = 200;
            break;
        case "Rome":
            costPerPersonPerDay = 140;
            break;
        case "Tokyo":
            costPerPersonPerDay = 180;
            break;
        case "Cape Town":
            costPerPersonPerDay = 120;
            break;
        case "Sydney":
            costPerPersonPerDay = 170;
            break;
        case "Kyoto":
            costPerPersonPerDay = 130;
            break;
        case "Venice":
            costPerPersonPerDay = 160;
            break;
        case "London":
            costPerPersonPerDay = 190;
            break;
        case "Dubai":
            costPerPersonPerDay = 210;
            break;
        case "Santorini":
            costPerPersonPerDay = 175;
            break;
    }

    const totalCost = days * persons * costPerPersonPerDay;
    document.getElementById('tripResult').innerText = `Estimated Trip Cost: $${totalCost}`;
}

// Contact Form Submission Alert
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your inquiry has been sent!');
});
