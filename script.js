document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    
    btn.innerHTML = '🦉 Sending Owl...';
    btn.disabled = true;

    const formData = new FormData(e.target);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            formContainer.style.display = 'none';
            successMsg.style.display = 'block';
            window.scrollTo({ top: 150, behavior: 'smooth' });
        } else {
            alert("Owl intercepted! Try again.");
            btn.innerHTML = "SEND OWL";
            btn.disabled = false;
        }
    } catch (error) {
        alert("Magic connection error.");
        btn.disabled = false;
    }
});
