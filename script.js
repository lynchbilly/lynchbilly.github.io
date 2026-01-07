document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    
    // UI Update: Prep the Owl
    btn.innerHTML = '🦉 Sending Owl...';
    btn.disabled = true;

    const formData = new FormData(e.target);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        // If the API returns a 200 OK status
        if (response.ok) {
            // SUCCESS: This hides the form and shows your cute "Mischief Managed" text
            formContainer.style.display = 'none';
            successMsg.style.display = 'block';
            window.scrollTo({ top: 150, behavior: 'smooth' });
        } else {
            // ERROR: This is where "Owl Intercepted" comes from
            alert("The owl was intercepted! Check your Web3Forms Access Key.");
            btn.innerHTML = "SEND OWL";
            btn.disabled = false;
        }
    } catch (error) {
        // NETWORK ERROR: Usually happens if Wi-Fi is down
        alert("Magic connection error. Is your wand connected to the Wi-Fi?");
        btn.innerHTML = "SEND OWL";
        btn.disabled = false;
    }
});
