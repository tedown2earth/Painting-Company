

document.addEventListener("DOMContentLoaded", function () {


    const form = document.getElementById("serviceForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get input elements
            const nameInput = document.getElementById("name");
            const phoneInput = document.getElementById("phone");
            const serviceInput = document.getElementById("service");
            const locationInput = document.getElementById("location");

            // Safety check
            if (!nameInput || !phoneInput || !serviceInput || !locationInput) {
                alert("Form error. Please reload the page.");
                return;
            }

            // Get values
            const customerName = nameInput.value.trim();
            const phoneNumber = phoneInput.value.trim();
            const serviceType = serviceInput.value;
            const customerLocation = locationInput.value.trim();

            // Validation
            if (
                customerName === "" ||
                phoneNumber === "" ||
                serviceType === "" ||
                customerLocation === ""
            ) {
                alert("Please fill in all fields.");
                return;
            }

            // Create request object
            const request = {
                id: Date.now(),
                name: customerName,
                phone: phoneNumber,
                service: serviceType,
                location: customerLocation
            };

            // Get stored requests
            let requests = [];
            try {
                requests = JSON.parse(localStorage.getItem("requests")) || [];
            } catch {
                requests = [];
            }

            // Save request
            requests.push(request);
            localStorage.setItem("requests", JSON.stringify(requests));

            alert("Request submitted successfully!");
            form.reset();
        });
    }

            // Display requests

    const requestsContainer = document.getElementById("requests");

    if (requestsContainer) {
        let requests = [];
        try {
            requests = JSON.parse(localStorage.getItem("requests")) || [];
        } catch {
            requests = [];
        }

        if (requests.length === 0) {
            requestsContainer.innerHTML = "<p>No service requests submitted yet.</p>";
            return;
        }

        requestsContainer.innerHTML = "";

        requests.forEach(function (request) {
            const card = document.createElement("div");
            card.classList.add("request-card");

            card.innerHTML = `
                <h3>${request.name}</h3>
                <p><strong>Phone:</strong> ${request.phone}</p>
                <p><strong>Service:</strong> ${request.service}</p>
                <p><strong>Location:</strong> ${request.location}</p>
                <button class="delete-btn">Delete</button>
            `;

            const deleteBtn = card.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function () {
                deleteRequest(request.id);
            });

            requestsContainer.appendChild(card);
        });
    }

   

    function deleteRequest(id) {
        let requests = [];
        try {
            requests = JSON.parse(localStorage.getItem("requests")) || [];
        } catch {
            requests = [];
        }

        requests = requests.filter(function (req) {
            return req.id !== id;
        });

        localStorage.setItem("requests", JSON.stringify(requests));
        location.reload();
    }

});
