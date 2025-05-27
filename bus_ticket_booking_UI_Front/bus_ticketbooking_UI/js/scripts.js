/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // add post request logic here
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data = JSON.stringify({
                "dob": registrationForm.dob.value,
                "email": registrationForm.email.value,
                "first_name": registrationForm.first_name.value,
                "gender": registrationForm.gender.value,
                "last_name": registrationForm.last_name.value,
                "password": registrationForm.password.value,
                "phone_number": registrationForm.phone_number.value,
                "user_role": "User"
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == "Success") {
                alert("Registration successful!");
                registrationForm.reset(); // Reset the form
            } else {
                alert("Registration failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please try again later.");
        });
    });
});