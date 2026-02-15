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


    // Simple Validation
    
             if (name === "" || phone === "" || service === "" || location === "") {
                alert("Please fill in all fields.");
                return;
            }

    // Create request object
            const request = {
                id: Date.now(), 
                name: name,
                phone: phone,
                service: service,
                location: location
            };

    // Create empty array
             const requests = JSON.parse(localStorage.getItem("requests")) || [];


     // Add new request
            requests.push(request);

    // Save to localStorage
            localStorage.setItem("requests", JSON.stringify(requests));        

        alert("Request submitted successfully!");
      
     // Clear form
            form.reset();
            

     const requestsContainer = document.getElementById("requests");

    if (requestsContainer) {
        const requests = JSON.parse(localStorage.getItem("requests")) || [];

        if (requests.length === 0) {
            requestsContainer.innerHTML = "<p>No service requests yet.</p>";
            return;
        }

        requests.forEach(function (request) {
            const card = document.createElement("div");
            card.className = "request-card";

            card.innerHTML = `
                <h3>${request.name}</h3>
                <p><strong>Phone:</strong> ${request.phone}</p>
                <p><strong>Service:</strong> ${request.service}</p>
                <p><strong>Location:</strong> ${request.location}</p>
                <button class="delete-btn">Delete</button>
            `;

            const deleteButton = card.querySelector(".delete-btn");

            deleteButton.addEventListener("click", function () {
                deleteRequest(request.id);
            });

            requestsContainer.appendChild(card);
        });
    }

    // Delete function
     function deleteRequest(id) {
        let requests = JSON.parse(localStorage.getItem("requests")) || [];
        requests = requests.filter(function (req) {
            return req.id !== id;
        });

        localStorage.setItem("requests", JSON.stringify(requests));
        location.reload(); // Refresh page to update UI
    }


        
