
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}


const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Registration successful! We look forward to seeing you at the event.");
        registrationForm.reset();
        window.location.href = 'index.html';
    });
}
