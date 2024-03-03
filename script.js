const form = document.querySelector('form');
const inputList = document.querySelectorAll('input');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');




form.addEventListener('submit',function(event){
    for(let input of inputList){
        input.placeholder = '';
    }

    displayError(firstName, 'empty-fname', 'First name cannot be empty');
    displayError(lastName, 'empty-lname', 'Last name cannot be empty');
    displayError(email, 'invalid-email', 'Looks like this is not an email');
    displayError(password, 'empty-password', 'Password cannot be empty');
});

function displayError(input, id, message){
    if(input.value.trim() === "" || (email.value && message === 'Looks like this is not an email' && !isValidEmail(email.value))){
        event.preventDefault();
        input.style.border = '2px solid hsl(0, 100%, 74%)';
        if(!document.getElementById(id)){
            const error = document.createElement('p');
            error.setAttribute('id',id);
            error.textContent = message;
            error.classList.add('visible');
            input.classList.add('error');
            input.parentNode.insertBefore(error, input.nextSibling);
        }
    } else if(document.getElementById(id)) {
        document.getElementById(id).remove();
        input.removeAttribute('class', 'error');
        input.style.border = '1px solid hsl(246, 25%, 77%)';
        input.style.outline = 'none';
    }
}

function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}