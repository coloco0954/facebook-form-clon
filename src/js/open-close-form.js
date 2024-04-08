const closeForm = document.querySelector('#close-form');
const signButton = document.querySelector('#sign-button');
const signForm = document.querySelector('#sign-form')

signButton.addEventListener('click', function(){
    signForm.classList.remove('opacity-0', 'pointer-events-none');
});

closeForm.addEventListener('click', function(){
    signForm.classList.add('opacity-0', 'pointer-events-none')
})