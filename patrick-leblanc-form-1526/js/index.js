// DECLARING VARIABLES 
let form = document.getElementById('contact')
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

// DECLARING THE FUNCTION
function formValidator(ev) {

    //prevent form submission
    ev.preventDefault();

    //trim whitespace
    name.value = name.value.trim();
    email.value = email.value.trim();
    message.value = message.value.trim();

    //array for errors
    let errors = [];

    //object for data
    let data = {};

    //validation for name
    if (name.value !== '') {
        data.Name = name.value;
    } else {
        errors.push('Please enter your name!');
    }

    //validation for email
    if (email.value !== '') {
        if (pattern.test(email.value)) {
            data.Email = email.value;
        } else {
            errors.push('The email is invalid!')
        }
    } else {
        errors.push('Please enter your email!');
    }

    //validation for message
    if (message.value !== '') {
        data.Message = message.value;
    } else {
        errors.push('Please enter a message!');
    }

    //Logging errors or value to the console
    if (errors == "") {
        console.log("COLLECTED DATA", data);
        form.reset();
        message.value = "";
    } else {
        console.log("ERRORS", errors);
    }

}

form.addEventListener('submit', formValidator)
