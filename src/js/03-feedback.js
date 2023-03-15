import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const inputEl = document.querySelector('[name ="email"]');

const textareaEl = document.querySelector('[name ="message"]');
inputEl.setAttribute('id', 'email');
textareaEl.setAttribute('id', 'message');

populateForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let userStorage = {};

function onFormInput(e) {
    e.preventDefault();
    
    const name = e.target;
    const value = e.target.value;
    const attributeName = name.getAttribute("id");
    if (attributeName === 'email') {
         userStorage.email = value;
    } else {
        userStorage.message = value;
    }
    const userData = JSON.stringify(userStorage);
    localStorage.setItem('feedback-form-state', userData); 
   
}

function onFormSubmit(e) {
    e.preventDefault();
    if (!userStorage.email || !userStorage.message) {
        alert("Треба заповнити всі поля форми");
        return;
    }
    e.currentTarget.reset();
    const feedback = {
        email: userStorage.email,
        message: userStorage.message
    };
    console.log(feedback);
    localStorage.removeItem('feedback-form-state');
}


function populateForm() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedSavedData = JSON.parse(savedData);
        
        inputEl.value = parsedSavedData.email;
        
        textareaEl.value = parsedSavedData.message;
       if(parsedSavedData.email === undefined){
        inputEl.value = '';  
        } if (parsedSavedData.message === undefined) {
            textareaEl.value = '';
    }
    } 
}