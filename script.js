const form = document.getElementById('contact-form');
const formContainer = document.getElementById('form-container');
const successMsg = document.getElementById('success-msg');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append("access_key", "459fc5ea-0806-4825-824d-d3c9115a7942");

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            formContainer.style.display = 'none';
            successMsg.style.display = 'block';
        } else {
            alert("Error sending message.");
        }
    } catch (error) {
        alert("Something went wrong.");
    } finally {
        submitBtn.textContent = "Dispatch Owl";
        submitBtn.disabled = false;
    }
});
