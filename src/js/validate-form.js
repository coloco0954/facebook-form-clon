const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last-name');
const numberInput = document.querySelector('#number');
const passwordInput = document.querySelector('#passwordInput');

nameInput.addEventListener('blur', () => validarInput(nameInput));
lastNameInput.addEventListener('blur', () => validarInput(lastNameInput));
numberInput.addEventListener('blur', ()=> validarInput(numberInput))
passwordInput.addEventListener('blur', () => validarInput(passwordInput));

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