const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const mobileNo = document.getElementById('mobile-no');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
})


function validateForm() {
  if (validateUsername() && validateEmail() && validateMobileNo() && validatePassword() && validatePasswordConfirmation()) {
    alert('Your account has been created successfully');
    form.reset();
    document.querySelectorAll('.form-control').forEach(formControl => {
      formControl.classList.remove('success');
    })
  }

}


function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  formControl.querySelector('small').innerText = message;
}


function validateUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === '') {
    setError(username, 'Username cannot be empty');
    return false;
  }
  else if (usernameValue.length < 4) {
    setError(username, 'Username must be at least 4 characters long');
    return false;
  }
  else {
    setSuccess(username);
    return true;
  }
}

function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setError(email, 'Email cannot be empty');
    return false;
  }
  else if (!isEmail(emailValue)) {
    setError(email, 'Not a valid email');
    return false;
  }
  else {
    setSuccess(email);
    return true;
  }
}

function validateMobileNo() {
  const mobileNumberValue = mobileNo.value.trim();
  if (mobileNumberValue.match(/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi)) {
    setError(mobileNo, 'Please enter a valid mobile number');
    return false;
  }
  else if (mobileNumberValue === '') {
    setError(mobileNo, 'Mobile number cannot be empty');
    return false;
  }
  else if (mobileNumberValue.length > 10) {
    setError(mobileNo, 'Mobile number cannot be more than 10 digits');
    return false;
  }
  else if (mobileNumberValue.length < 10) {
    setError(mobileNo, 'Mobile number cannot be less than 10 digits');
    return false;
  }
  else {
    setSuccess(mobileNo);
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === '') {
    setError(password, 'Password cannot be empty');
    return false;
  }
  else if (passwordValue.length < 6) {
    setError(password, 'Password must be at least 6 characters');
    return false;
  }
  else {
    setSuccess(password);
    return true;
  }
}
function validatePasswordConfirmation() {
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();
  if (passwordConfirmationValue !== passwordValue) {
    setError(passwordConfirmation, 'Password does not match');
    return false;
  }
  else if (passwordConfirmationValue === '') {
    setError(passwordConfirmation, 'Password cannot be empty');
    return false;
  }
  else {
    setSuccess(passwordConfirmation);
    return true;
  }
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}