/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-btn");
    searchButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // add post request logic here
        sessionStorage.setItem("from", document.getElementById("departure").value);
        sessionStorage.setItem("to", document.getElementById("destination").value);
        window.location.href = "/bus_ticketbooking_UI/buslist.html";
    });
});