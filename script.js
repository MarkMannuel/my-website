// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form fields
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission (you can replace this with an actual API call)
  setTimeout(() => {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.querySelector('.contact-form').reset(); // Clear the form
  }, 1000);
});