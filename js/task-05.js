
const currentNameField = document.querySelector('#name-input')
const currentText = document.querySelector('#name-output')

currentNameField.addEventListener('input',(event) => {    
    event.currentTarget.value.trim()==='' ?
    currentText.textContent='незнакомец' :
    currentText.textContent = event.currentTarget.value
})

  

