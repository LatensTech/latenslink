document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = "Thanks! Your message has been received (Test Mode).";
    this.reset();
});
