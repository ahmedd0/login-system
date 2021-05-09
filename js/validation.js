function validate(inpElement, Regex, alertDiv) {
  let isValid = Regex.test(inpElement.value);
  if (isValid) {
    alertDiv.classList.add("d-none");
    inpElement.classList.remove("is-invalid");
    inpElement.classList.add("is-valid");
  } else {
    alertDiv.classList.remove("d-none");
    inpElement.classList.add("is-invalid");
    inpElement.classList.remove("is-valid");
  }
}
function hideValidationEffect(inpElement, alertDiv) {
  alertDiv.classList.add("d-none");
  inpElement.classList.remove("is-invalid");
  inpElement.classList.remove("is-valid");
}

export default { validate, hideValidationEffect };
