function validateForm() {
  const form = document.querySelector(".contact-form");

  const name = form.name.value.trim();
  const lastname = form.lastname.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const comments = form.comments.value.trim();

  if (!name || !lastname || !phone || !email || !comments) {
    alert("Please fill in all fields!");
    return false;
  }

  // простая проверка email
  if (!email.includes("@")) {
    alert("Invalid email!");
    return false;
  }

  alert("Form submitted successfully!");
  form.reset();

  return true;
}