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
    var userDetails = sessionStorage.getItem('userDetails');
    var busDetails = sessionStorage.getItem('busDetails');
    var price;
    if (busDetails && userDetails) {
        userDetails = JSON.parse(userDetails);
        busDetails = JSON.parse(busDetails);
        registrationForm.bus_name.value = busDetails[1];
        registrationForm.from_location.value = busDetails[3];
        registrationForm.to_location.value = busDetails[4];
        registrationForm.first_name.value=userDetails.first_name;
        registrationForm.last_name.value=userDetails.last_name;
        registrationForm.email.value = userDetails.email;
        registrationForm.phone_number.value = userDetails.phone_number;
        price = busDetails[6];
    }

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // add post request logic here
        fetch("http://localhost:8080/addbooking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data = JSON.stringify({
                "bus_name": registrationForm.bus_name.value,
                "from_location": registrationForm.from_location.value,
                "to_location": registrationForm.to_location.value,
                "first_name": registrationForm.first_name.value,
                "last_name": registrationForm.last_name.value,
                "email": registrationForm.email.value,
                "phone_number": registrationForm.phone_number.value,
                "number_of_seats": registrationForm.number_of_seats.value,
                "total_price": registrationForm.number_of_seats.value * price,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == "Success") {
                alert("Booking successful!");
                window.location.href = "/bus_ticketbooking_UI/mybookings.html";
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