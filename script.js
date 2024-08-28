// Dynamic Welcome Message
window.onload = function () {
    const dynamicMessage = document.getElementById('dynamic-message');
    const messages = [
        "Explore the world with us.",
        "Experience luxury like never before.",
        "Your dream vacation awaits."
    ];
    let i = 0;

    // Display a new message every 3 seconds
    if (dynamicMessage) {
        setInterval(function () {
            dynamicMessage.innerText = messages[i];
            i = (i + 1) % messages.length;
        }, 3000);
    }
}

// Contact form handling
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});
