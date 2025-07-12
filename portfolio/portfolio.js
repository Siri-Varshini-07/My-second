document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    document.getElementById('responseMessage').textContent = 'Please fill all the fields.';
    document.getElementById('responseMessage').style.color = 'red';
    return;
  }

  document.getElementById('responseMessage').textContent = `Thanks for reaching out, ${name}! I’ll get back to you soon.`;
  document.getElementById('responseMessage').style.color = 'green';

  this.reset();
});