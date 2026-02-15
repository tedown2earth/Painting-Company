document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("serviceForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop page refresh

            console.log("Form submitted successfully");
        });
    }

});

    // Get input values
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const location = document.getElementById("location").value.trim();


    
            
            