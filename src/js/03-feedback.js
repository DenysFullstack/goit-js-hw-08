import throttle from 'lodash.throttle';
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = {};
const LS = localStorage;

form.addEventListener('input', throttle(onFormInfo, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInfo(e) {
  formData[e.target.name] = e.target.value;
  LS.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

if (LS.getItem(LOCAL_STORAGE_KEY)) {
  formData = JSON.parse(LS.getItem(LOCAL_STORAGE_KEY));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(formData);
  e.target.reset();
  LS.removeItem(LOCAL_STORAGE_KEY);
  formData = {}
}
