const form = document.getElementById('contact-form'); // Matches your HTML ID
const formContainer = document.getElementById('form-container');
const successMsg = document.getElementById('success-msg');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    // Using your provided access key
    formData.append("access_key", "459fc5ea-0806-4825-824d-d3c9115a7942");

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            // MISCHIEF MANAGED LOGIC
            formContainer.style.display = 'none'; // Hides the form
            successMsg.style.display = 'block';   // Shows the success message
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
