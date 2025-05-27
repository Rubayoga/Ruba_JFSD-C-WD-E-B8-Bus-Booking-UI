/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");
    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        if (passwordForm.new_password.value !== passwordForm.confirm_password.value) {
            alert("New password and confirm password do not match.");
            return;
        }

        fetch("http://localhost:8080/password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": sessionStorage.getItem("userId"),
                "password": passwordForm.new_password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "Success") {
                alert("Password changed successfully!");
                passwordForm.reset(); // Reset the form after successful change
            } else {
                alert("Password change failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
        });
    });
});