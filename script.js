document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    
    // Visual feedback that the "Owl" is being prepped
    btn.innerHTML = '🦉 Sending Owl...';
    btn.disabled = true;

    const formData = new FormData(e.target);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            // Success: Hide form and show "Mischief Managed"
            formContainer.style.display = 'none';
            successMsg.style.display = 'block';
            window.scrollTo({ top: 200, behavior: 'smooth' });
        } else {
            alert("The owl was intercepted! Please try casting the spell again.");
            btn.textContent = "SEND OWL";
            btn.disabled = false;
        }
    } catch (error) {
        alert("Magic connection error. Is your wand (Wi-Fi) connected?");
        btn.textContent = "SEND OWL";
        btn.disabled = false;
    }
});
