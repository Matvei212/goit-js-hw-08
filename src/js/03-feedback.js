import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const STORAGE_KEY = 'feedback-form-state';

  let formData = {};

  const feedbackFormRef = document.querySelector('.feedback-form');

  feedbackFormRef.addEventListener(
    'input',
    throttle(getFeedbackFormState, 500)
  );

  function getFeedbackFormState(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  populateForm();

  feedbackFormRef.addEventListener('submit', onFormSubmit);

  function onFormSubmit(evt) {
    evt.preventDefault();
    if (feedbackFormRef[0].value === '' || feedbackFormRef[1].value === '') {
      alert('Треба заповнити всі поля форми');
    } else {
      console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
      feedbackFormRef.reset();
      Object.getOwnPropertyNames(formData).forEach(key => (formData[key] = ''));
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function populateForm() {
    if (localStorage.getItem(STORAGE_KEY)) {
      formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

      for (let key in formData) {
        feedbackFormRef.elements[key].value = formData[key];
      }
    }
  }
});