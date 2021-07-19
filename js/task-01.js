
const numbersOfCategoriesEl = document.querySelectorAll('.item')
console.log(`В списке ${numbersOfCategoriesEl.length} категории`)
const screenAboutCategoriesEl = document.querySelectorAll('h2')
const showListOfCategories = screenAboutCategoriesEl.forEach(el =>
console.log(
`Категория: ${el.textContent}
Количество элементов: ${el.parentNode.querySelectorAll('li').length}`))
