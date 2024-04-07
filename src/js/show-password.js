const passwordInput = document.querySelector('#password');
const eyeImage = document.querySelector('#eye');

passwordInput?.addEventListener('keyup', function(){
    if(passwordInput.value.length >= 1){
        eyeImage?.classList.remove('opacity-0');
    } else {
        eyeImage?.classList.add('opacity-0')
    }
})

eyeImage?.addEventListener('click', function(){
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        eyeImage.src = '/eye.svg';
    } else {
        passwordInput.type = 'password';
        eyeImage.src = '/eye-slash.svg';
    }
})