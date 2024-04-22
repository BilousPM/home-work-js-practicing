const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', hendlerSubmitForm);

function hendlerSubmitForm(e) {
  e.preventDefault();
  const form = e.target;

  const email = form.elements.email.value;
  const login = form.elements.password.value;
  if (email === '' || login === '') {
    alert('all fields must be filled');
    return;
  }

  const formData = {};
  formData.email = email;
  formData.login = login;
  console.log(formData);
  form.reset();
}
