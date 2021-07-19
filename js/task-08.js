
const controlsBtns = document.querySelectorAll('#controls button')
const renderBoxesBtn= (controlsBtns[0])
const destroyBoxesBtn = (controlsBtns[1])
const boxesContainer = document.querySelector('#boxes')
const amountInput = document.querySelector('#controls input')

renderBoxesBtn.addEventListener("click", getAmount);
destroyBoxesBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = amountInput.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i+=1) {
   const size = basicSize + i * 10;
      const div = document.createElement('div');
      div.style = `width: ${size}px; height: ${size}px`;
      div.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()} )`
    
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
    amountInput.value = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}
