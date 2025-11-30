// contact-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^\+?\d[\d\s\-]{7,14}\d$/.test(phone);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.style.color = 'var(--muted)';
    msg.textContent = '';

    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const reason = form.reason.value;
    const message = form.message.value.trim();
    const consent = form.consent.checked;

    if (!fullname) return msg.textContent = "Please enter your full name.";
    if (!email || !validateEmail(email)) return msg.textContent = "Please enter a valid email.";
    if (!phone || !validatePhone(phone)) return msg.textContent = "Please enter a valid phone number.";
    if (!reason) return msg.textContent = "Please select a reason for contacting us.";
    if (!message) return msg.textContent = "Please enter a message.";
    if (!consent) return msg.textContent = "You must give consent to proceed.";

    msg.style.color = "green";
    msg.textContent = "Thank you! Your message has been sent. We will contact you shortly.";

    form.reset();
  });
});
