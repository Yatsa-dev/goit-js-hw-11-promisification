
const numbersOfCategoriesEl = document.querySelectorAll('.item')
console.log(`В списке ${numbersOfCategoriesEl.length} категории`)
const screenAboutCategoriesEl = document.querySelectorAll('h2')
const showListOfCategories = screenAboutCategoriesEl.forEach(el =>
console.log(
`Категория: ${el.textContent}
Количество элементов: ${el.parentNode.querySelectorAll('li').length}`))



// const listCategoriesEl = document.querySelector('#categories');
// console.log(`В списке ${listCategoriesEl.children.length} категории.`);

// console.log(`Категория: ${listCategoriesEl.children[0].firstElementChild.textContent}`)
// console.log(`Количество элементов: ${listCategoriesEl.children[0].lastElementChild.children.length}`)
 
// console.log(`Категория: ${listCategoriesEl.children[1].firstElementChild.textContent}`)
// console.log(`Количество элементов: ${listCategoriesEl.children[1].lastElementChild.children.length}`)

// console.log(`Категория: ${listCategoriesEl.children[2].firstElementChild.textContent}`)
// console.log(`Количество элементов: ${listCategoriesEl.children[2].lastElementChild.children.length}`)
