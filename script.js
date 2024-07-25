document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            isValid = false;
            showError(nameInput, "El nombre es obligatorio.");
        } else {
            clearError(nameInput);
        }

        // Validate email
        if (emailInput.value.trim() === "") {
            isValid = false;
            showError(emailInput, "El correo electrónico es obligatorio.");
        } else if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, "Introduce un correo electrónico válido.");
        } else {
            clearError(emailInput);
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            isValid = false;
            showError(messageInput, "El mensaje es obligatorio.");
        } else {
            clearError(messageInput);
        }

        if (isValid) {
            // Show success message
            showAlert("Formulario enviado correctamente.", "success");
            form.reset();
        }
    });

    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector(".error-message");

        if (error) {
            error.innerText = message;
        } else {
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.innerText = message;
            formGroup.appendChild(errorMessage);
        }

        input.classList.add("is-invalid");
    }

    // Clear error message
    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector(".error-message");

        if (error) {
            formGroup.removeChild(error);
        }

        input.classList.remove("is-invalid");
    }

    // Validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Show alert message
    function showAlert(message, type) {
        const alertPlaceholder = document.createElement("div");
        alertPlaceholder.className = `alert alert-${type}`;
        alertPlaceholder.innerText = message;
        document.body.insertBefore(alertPlaceholder, document.body.firstChild);

        setTimeout(function() {
            alertPlaceholder.remove();
        }, 3000);
    }

    // Social media button animation
    const socialButtons = document.querySelectorAll(".btn-social");
    socialButtons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.classList.add("animate__animated", "animate__pulse");
        });

        button.addEventListener("mouseout", function() {
            button.classList.remove("animate__animated", "animate__pulse");
        });
    });
});
