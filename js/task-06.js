
const validationsEl = document.querySelector('#validation-input')
validationsEl.addEventListener('blur', (event) =>{
    (event.currentTarget.value.length===Number(validationsEl.dataset.length)) ?
        validationsEl.setAttribute('class','valid') :
        validationsEl.setAttribute('class','invalid')
    
})
