/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example JavaScript for a registration form
document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.getElementById("profileForm");
    var userDetails = sessionStorage.getItem('userDetails');
    if (userDetails) {
        userDetails = JSON.parse(userDetails);
        profileForm.first_name.value = userDetails.first_name;
        profileForm.last_name.value = userDetails.last_name;
        profileForm.email.value = userDetails.email;
        profileForm.phone_number.value = userDetails.phone_number;
        profileForm.dob.value = userDetails.dob;
        profileForm.gender.value = userDetails.gender;
    }
});