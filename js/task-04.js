const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}
const btnActions = document.querySelectorAll('#counter button')
const decrementBtn = (btnActions[0])
const incrementBtn = (btnActions[1])
const valueEl = document.querySelector('#value')

decrementBtn.addEventListener('click',  () =>{  
counterValue.decrement()
valueEl.textContent = counterValue.value
})

incrementBtn.addEventListener('click', () => {
counterValue.increment()
valueEl.textContent = counterValue.value
})
    