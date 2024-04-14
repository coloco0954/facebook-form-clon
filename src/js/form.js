const closeFormButton = document.querySelector('#close-form');
const signButton = document.querySelector('#sign-button');
const signForm = document.querySelector('#sign-form')

const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last-name');
const numberInput = document.querySelector('#number');
const password = document.querySelector('#passwordInput');

const passwordInput = document.querySelector('#password');
const eyeImage = document.querySelector('#eye');

signButton.addEventListener('click', ()=> openForm());
closeFormButton.addEventListener('click', ()=> closeForm())

// Funcion para abrir el formulario de registro
function openForm(){
    signForm.classList.remove('opacity-0', 'pointer-events-none');
}

//Funcion para cerrar el formulario de registro
function closeForm(){
    signForm.classList.add('opacity-0', 'pointer-events-none');

    clearInput(nameInput);
    clearInput(lastNameInput);
    clearInput(numberInput);
    clearInput(password)
}

passwordInput?.addEventListener('keyup', ()=> showEye())

//Funcion para mostrar imagen de ojo
function showEye(){
    if(passwordInput.value.length >= 1){
        eyeImage?.classList.remove('opacity-0');
    } else {
        eyeImage?.classList.add('opacity-0')
    }
}

eyeImage?.addEventListener('click', ()=> showPassword())

// Funcion para mostrar y ocultar la contrasena
function showPassword(){
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        eyeImage.src = '/eye.svg';
    } else {
        passwordInput.type = 'password';
        eyeImage.src = '/eye-slash.svg';
    }
}

nameInput.addEventListener('blur', () => validarInput(nameInput));
lastNameInput.addEventListener('blur', () => validarInput(lastNameInput));
numberInput.addEventListener('blur', ()=> validarInput(numberInput))
password.addEventListener('blur', () => validarInput(password));

// Funcion para validar los inputs de registro
function validarInput(input){
    const image = input.nextElementSibling;
    if(input.value === ''){
        image.classList.remove('opacity-0');
        input.classList.add('border-red-500');
    } else{
        image.classList.add('opacity-0');
        input.classList.remove('border-red-500');
    }
}

// Funcion para limpiar input
function clearInput(input){
    const image = input.nextElementSibling;
    input.value = '';
    input.classList.remove('border-red-500');
    image.classList.add('opacity-0');
}