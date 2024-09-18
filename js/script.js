document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); // Reset form fields
});
