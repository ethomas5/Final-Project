
const nameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const submit = document.getElementsByClassName("btn btn-primary");
const error = document.getElementsByClassName("error-message")[0];
const email = document.getElementById("email");
const message = document.getElementById("contact-kind")





const firstCheckValidation = (e) => {
    
    const validState = nameField.value.length >= 3
    if (!validState) {
        e.preventDefault()
        nameField.closest(".form-group").classList.add('invalid');
        nameField.closest(".form-group").classList.remove('valid');
        error.style.display = "flex"; 
        console.log("Bad input")
    } else {
        e.preventDefault()
        nameField.validity.valid = true;
        nameField.closest(".form-group").classList.add('valid');
        nameField.closest(".form-group").classList.remove('invalid');
         
    };
    
};

const lastCheckValidation = (e) => {
    
    const validState = lastNameField.value.length >= 3;
    if (!validState) {
        e.preventDefault()
        lastNameField.closest(".form-group").classList.add('invalid');
        lastNameField.closest(".form-group").classList.remove('valid');
        error.style.display = "flex"; 
        console.log("Bad input");
    } else {
        e.preventDefault()
        lastNameField.validity.valid = true;
        lastNameField.closest(".form-group").classList.add('valid');
        lastNameField.closest(".form-group").classList.remove('invalid');
         
    };
    
};

const emailCheckValidation = (e) => {
    regex = /\w+@\w+\.\w+/;
    const validState = email.value.match(regex);
    if (!validState) {
        e.preventDefault();
        email.closest(".form-group").classList.add('invalid');
        email.closest(".form-group").classList.remove('valid');
        error.style.display = "flex";
        console.log("Bad input");
        
    } else {
        e.preventDefault()
        email.validity.valid = true;
        email.closest(".form-group").classList.add('valid');
        email.closest(".form-group").classList.remove('invalid');
        
         
    };
    
};



class Person {
    constructor(firstName, lastName, email, message) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.message = message
    }

}

const createPerson = () => {
let client = new Person (
    nameField.value,
    lastNameField.value,
    email.value,
    message.value
)
console.log(client.firstName)
console.log(client.lastName)
console.log(client.email)
console.log(client.message)
window.localStorage.setItem('user', JSON.stringify(client));
}





form.addEventListener("submit", firstCheckValidation);
form.addEventListener("submit", lastCheckValidation);
form.addEventListener("submit", emailCheckValidation);
form.addEventListener("submit", createPerson);

