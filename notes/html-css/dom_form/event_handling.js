"use strict";


// This is going to manage events and load our js only at the end of the page loading phase (not content as images)
document.addEventListener("DOMContentLoaded", (event) => {
    const userForm = document.getElementById("userinfo");

    // We will handle the form submission preventing default (not sending to a server) and manage it in another way
    userForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let name = userForm.elements["username"].value;
        console.log(name);
    });
});