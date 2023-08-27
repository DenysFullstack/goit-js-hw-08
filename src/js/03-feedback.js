import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMeassage = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInfo, 500));
form.addEventListener('submit', onFormSubmit);

const dataInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if (dataInfo) {
  const { email, message } = dataInfo;
  inputEmail.value = email;
  inputMeassage.value = message;
} else {
  inputEmail.value = '';
  inputMeassage.value = '';
}

function onFormInfo(e) {
  const { email, message } = e.currentTarget.elements;
  if (email.value === '' || message.value === '') return;
  const info = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();
}
