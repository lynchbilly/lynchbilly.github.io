document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    
    btn.textContent = "Casting Spell...";
    btn.disabled = true;
    
    const formData = new FormData(e.target);
    formData.append("access_key", "5bb27b5f-ddfd-4bbc-b8df-85384c7de408");

    try {
        const response = await fetch("https://api.web3forms.com/submit", { 
            method: "POST", 
            body: formData 
        });
        
        if (response.ok) { 
            // Hide the form container and show the Mischief Managed box
            formContainer.style.display = 'none';
            successMsg.style.display = 'block';
            window.scrollTo({ top: 200, behavior: 'smooth' });
            e.target.reset(); 
        } else {
            alert("Transmission failed. The Dementors must be interfering.");
            btn.textContent = "Deploy Message";
            btn.disabled = false;
        }
    } catch { 
        alert("Magic connection error! Check your Wi-Fi (or your wand)."); 
        btn.textContent = "Deploy Message";
        btn.disabled = false;
    }
});
