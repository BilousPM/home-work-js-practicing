const inputRef = document.querySelector('#validation-input');
const atributValuev = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', hendlerBlurInput);

function hendlerBlurInput(event) {
  const inputLength = event.target.value.length;
  if (inputLength !== atributValuev) {
    inputRef.classList.add('invalid');
    return;
  }
  inputRef.classList.add('valid');
  inputRef.classList.remove('invalid');
}
