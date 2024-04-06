const passwordInput = document.querySelector('#password');
const eyeImage = document.querySelector('#eye');

passwordInput?.addEventListener('keyup', function(){
    if(passwordInput.value.length >= 1){
        eyeImage?.classList.remove('opacity-0');

        eyeImage?.addEventListener('click', function(){
            if(passwordInput.type == 'password'){
                eyeImage.src = '/eye.svg';
                passwordInput.type = 'text';
            } else {
                eyeImage.src = '/eye-slash.svg';
                passwordInput.type = 'password';
            }
        })
    } else {
        eyeImage?.classList.add('opacity-0')
    }
})