document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("serviceForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop page refresh

            console.log("Form submitted successfully");
        });
    }

});