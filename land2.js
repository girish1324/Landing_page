// Smooth scrolling function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Subscription form validation
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');
    
    if (validateEmail(email)) {
        errorMessage.textContent = '';
        alert('Thank you for subscribing!');
        // Here you can add the code to handle the form submission, e.g., an AJAX request to a server
    } else {
        errorMessage.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}