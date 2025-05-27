/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // add post request logic here
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": loginForm.email.value,
                "password": loginForm.password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "Success") {
                alert("Login successful!");
                sessionStorage.setItem("userId", data.user.id);
                sessionStorage.setItem("role", data.user.user_role);
                sessionStorage.setItem("userDetails", JSON.stringify(data.user));
                if(data.user.user_role == "User") { // Default to "User" if not set
                    window.location.href = "/bus_ticketbooking_UI/userhome.html"; // Redirect to dashboard or home page
                } else {
                    window.location.href = "/bus_ticketbooking_UI/adminhome.html"; // Redirect to admin dashboard
                }
            } else {
                alert("Login failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
        });
    });
});