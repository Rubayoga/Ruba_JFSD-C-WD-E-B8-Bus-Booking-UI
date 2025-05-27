/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    var url = "http://localhost:8080/bus";
    if( sessionStorage.getItem("from") ) {
        url += "?from=" + sessionStorage.getItem("from");
    }
    if( sessionStorage.getItem("to") ) {
        url += "&to=" + sessionStorage.getItem("to");
    }
   fetch(url , {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "Success") {
                const tableBody = document.createElement('tbody');
                data.buses.forEach(item => {
                    let row = tableBody.insertRow();
                    Object.values(item).forEach(value => {
                    let cell = row.insertCell();
                    cell.textContent = value;
                    });
                    row.insertCell().innerHTML = `<button class="btn btn-primary" onclick="bookBus('${item.bus_number}')">Book</button>`;
                    row.querySelector('button').addEventListener('click', function() {
                        sessionStorage.setItem('busDetails', JSON.stringify(Object.values(item)));
                        window.location.href = "/bus_ticketbooking_UI/bookbus.html";
                    });
                });
                document.getElementById('bus-table').appendChild(tableBody);
            } else {
                console.error(data.message);
            }
        })
        .catch(error => {
            console.error(error);
        });
});