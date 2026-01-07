/**
 * Wild Hog Coding - Contact Logic
 * Handles the "Mischief Managed" success state 
 *
 */

document.getElementById('contact-form').addEventListener('submit', function(e) {
    // 1. Prevent the default form submission (page reload)
    e.preventDefault();

    // 2. Identify the form and success message containers
    const formArea = document.getElementById('form-container');
    const successArea = document.getElementById('success-msg');

    // 3. Toggle visibility
    // Hide the form so it cannot be submitted twice
    formArea.style.display = 'none';
    
    // Show the "Mischief Managed" message
    successArea.style.display = 'block';

    // 4. Log for technical verification (WGU SDLC Testing phase)
    console.log("Form successfully submitted. Owl dispatched from Jacksonville.");
});
});
