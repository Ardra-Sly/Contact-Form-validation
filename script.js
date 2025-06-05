
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation using regex
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Message validation
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    // Success message if valid
    if (valid) {
        alert("Form submitted successfully!");
    }
});
