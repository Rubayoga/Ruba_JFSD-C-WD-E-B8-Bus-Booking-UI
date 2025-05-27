/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
   var role = sessionStorage.getItem("role");
   fetch("http://localhost:8080/bookings/" + sessionStorage.getItem("userId"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "Success") {
                const tableBody = document.createElement('tbody');
                data.bookings.forEach(item => {
                    let row = tableBody.insertRow();
                    Object.values(item).forEach(value => {
                    let cell = row.insertCell();
                    cell.textContent = value;
                    });
                });
                document.getElementById('bookingTable').appendChild(tableBody);
            } else {
                console.error(data.message);
            }
        })
        .catch(error => {
            console.error(error);
        });

        function home() {
            if (role == "Admin") {
                window.location.href = "/bus_ticketbooking_UI/adminhome.html"; // Redirect to user home page
            } else {
                window.location.href = "/bus_ticketbooking_UI/userhome.html"; // Redirect to admin home page
            }
        }

        document.getElementById("home").addEventListener("click", home);
});