/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("busbook");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // add post request logic here
        fetch("http://localhost:8080/addbus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data = JSON.stringify({
                bus_number: registrationForm.bus_number.value,
                bus_name: registrationForm.bus_name.value,
                from_location: registrationForm.from_location.value,
                to_location: registrationForm.to_location.value,
                number_of_seats: registrationForm.number_of_seats.value,
                ticket_price: registrationForm.ticket_price.value,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == "Success") {
                alert("Bus Added successful!");
                registrationForm.reset(); // Reset the form
            } else {
                alert("Registration failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });
});