
const validationsEl = document.querySelector('#validation-input')
validationsEl.addEventListener('blur', (event) =>{
    (event.currentTarget.value.length !== Number(validationsEl.dataset.length)) ?
        validationsEl.classList.add('invalid') :
        validationsEl.classList.replace('invalid', 'valid')
    
})
